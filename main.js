/**
 * Tasqly Task Manager - Main JavaScript File
 * Enhanced structure with better organization and performance
 */

class TasqlyApp {
    constructor() {
        this.isArabic = false;
        this.currentScreenshotView = 'admin';
        this.currentCurrency = 'USD';
        this.init();
    }

    // Initialize the application
    init() {
        this.detectLanguage();
        this.setupEventListeners();
        this.createParticles();
        this.setupScrollAnimations();
        this.initializeContent();
    }

    // Language detection and setup
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        this.isArabic = browserLang.startsWith('ar');
        
        document.documentElement.setAttribute('dir', this.isArabic ? 'rtl' : 'ltr');
        this.updateLanguageToggle();
    }

    // Update language toggle button
    updateLanguageToggle() {
        const langText = document.getElementById('langText');
        const langFlag = document.getElementById('langFlag');
        
        if (langText) langText.textContent = this.isArabic ? "English" : "العربية";

        if (langFlag) {
            langFlag.innerHTML = `<i class="fa fa-globe"></i> ${this.isArabic ? "English" : "العربية"}`;
        }
    }



    // Setup all event listeners
    setupEventListeners() {
        // Language toggle
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }

        // Screenshot view toggles
        const employeeToggle = document.getElementById('employeeToggle');
        const adminToggle = document.getElementById('adminToggle');
        
        if (employeeToggle) {
            employeeToggle.addEventListener('click', () => this.toggleScreenshotView('employee'));
        }
        
        if (adminToggle) {
            adminToggle.addEventListener('click', () => this.toggleScreenshotView('admin'));
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll);
        });

        // Modal events
        this.setupModalEvents();
        
        // Screenshot modal events
        this.setupScreenshotModal();

        // Plan buttons
        this.setupPlanButtons();
    }

    // Handle smooth scrolling
    handleSmoothScroll(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Setup modal events
    setupModalEvents() {
        const modal = document.getElementById('signupModal');
        const closeBtn = modal?.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                this.closeImageModal();
            }
        });
    }

    // Setup screenshot modal
    setupScreenshotModal() {
        const imageModal = document.getElementById('imageModal');
        const modalClose = document.querySelector('.modal-close');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeImageModal());
        }

        if (imageModal) {
            imageModal.addEventListener('click', (e) => {
                if (e.target === imageModal) {
                    this.closeImageModal();
                }
            });
        }
    }

    // Setup plan buttons
    setupPlanButtons() {
        const freeBtn = document.getElementById('freeBtn');
        if (freeBtn) {
            freeBtn.addEventListener('click', () => this.openModal());
        }
    }

    // Toggle language
    toggleLanguage() {
        this.isArabic = !this.isArabic;
        
        // Update direction
        // document.documentElement.setAttribute('dir', this.isArabic ? 'ltr' : 'rtl');
        document.documentElement.setAttribute('dir', this.isArabic ? 'rtl' : 'ltr');

        
        // Update language toggle
        this.updateLanguageToggle();
        
        // Update all translations
        this.updateTranslations();
        
        // Update screenshot view
        this.updateScreenshotView();
        
        // Update plan features
        this.updatePlanFeatures();
    }

    // Update all translations
    updateTranslations() {
        const currentLang = this.isArabic ? 'arabic' : 'english';
        const translations = this.getTranslations()[currentLang];
        
        Object.keys(translations).forEach(key => {
            const element = document.getElementById(key);
            if (!element) return;

            if (this.isTitleElement(key)) {
                const span = element.querySelector('span');
                if (span) span.textContent = translations[key];
            } else if (key === 'emailText' || key === 'websiteText' || key === 'discordText') {
                element.textContent = translations[key];
            } else {
                element.textContent = translations[key];
            }
        });

        this.updatePrices(currentLang);
    }

    // Check if element is a title element
    isTitleElement(key) {
        return ['featuresTitle', 'screenshotsTitle', 'plansTitle', 'contactTitle', 'tryNowTitle'].includes(key);
    }

    // Update prices
    updatePrices(lang) {
        const translations = this.getTranslations()[lang];
        const priceKeys = [
            { old: 'basicOldPrice', currency: 'basicCurrency', price: 'basicPrice', period: 'basicPeriod' },
            { old: 'proOldPrice', currency: 'proCurrency', price: 'proPrice', period: 'proPeriod' }
        ];

        priceKeys.forEach(plan => {
            const elements = {
                old: document.getElementById(plan.old),
                currency: document.getElementById(plan.currency),
                price: document.getElementById(plan.price),
                period: document.getElementById(plan.period)
            };

            Object.keys(elements).forEach(type => {
                if (elements[type] && translations[plan[type]]) {
                    elements[type].textContent = translations[plan[type]];
                }
            });
        });
    }

    // Update screenshot view
    updateScreenshotView() {
        this.toggleScreenshotView(this.currentScreenshotView);
    }

    // Toggle screenshot view
    toggleScreenshotView(view) {
        this.currentScreenshotView = view;
        
        const images = this.getScreenshotImages();
        const data = images[view];
        const container = document.getElementById('screenshotGrid');
        
        if (!container || !data) return;

        // Clear existing content
        container.innerHTML = '';

        // Add new screenshots
        data.forEach(item => {
            const card = this.createScreenshotCard(item);
            container.appendChild(card);
        });

        // Update button states
        this.updateScreenshotButtons(view);
        
        // Attach event listeners to new cards
        this.attachScreenshotListeners();
    }

    // Create screenshot card
    createScreenshotCard(item) {
        const card = document.createElement('div');
        card.className = 'screenshot-card';
        
        const caption = this.isArabic ? item.captionAr : item.captionEn;
        
        card.innerHTML = `
            <img src="${item.src}" alt="${caption}">
            <div class="screenshot-overlay">
                <span>${caption}</span>
            </div>
        `;
        
        return card;
    }

    // Update screenshot buttons
    updateScreenshotButtons(view) {
        const employeeBtn = document.getElementById('employeeToggle');
        const adminBtn = document.getElementById('adminToggle');
        
        if (employeeBtn) employeeBtn.classList.toggle('active', view === 'employee');
        if (adminBtn) adminBtn.classList.toggle('active', view === 'admin');
    }

    // Attach screenshot listeners
    attachScreenshotListeners() {
        document.querySelectorAll('.screenshot-card').forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                this.openImageModal(img.src);
            });
        });
    }

    // Update plan features
    updatePlanFeatures() {
        const lang = this.isArabic ? 'arabic' : 'english';
        const translations = this.getTranslations()[lang];
        
        this.updatePlanFeatureSet('free', 4, translations);
        this.updatePlanFeatureSet('basic', 6, translations);
        this.updatePlanFeatureSet('pro', [1, 2, 3, 4, 5, 6, 8], translations);
    }

    // Update plan feature set
    updatePlanFeatureSet(planType, features, translations) {
        const icons = this.getPlanIcons(planType);
        const featureArray = Array.isArray(features) ? features : Array.from({length: features}, (_, i) => i + 1);
        
        featureArray.forEach((featureNum, index) => {
            const element = document.getElementById(`${planType}Feature${featureNum}`);
            const translationKey = `${planType}Feature${featureNum}`;
            
            if (element && translations[translationKey]) {
                element.innerHTML = `${icons[index]} ${translations[translationKey]}`;
            }
        });
    }

    // Get plan icons
    getPlanIcons(planType) {
        const iconSets = {
            free: [
                '<i class="fas fa-users"></i>',
                '<i class="fas fa-tasks"></i>',
                '<i class="fas fa-bell-slash"></i>',
                '<i class="fas fa-gift"></i>'
            ],
            basic: [
                '<i class="fas fa-users"></i>',
                '<i class="fas fa-tasks"></i>',
                '<i class="fas fa-chart-bar"></i>',
                '<i class="fas fa-envelope"></i>',
                '<i class="fas fa-hdd"></i>',
                '<i class="fas fa-bell"></i>'
            ],
            pro: [
                '<i class="fas fa-users"></i>',
                '<i class="fas fa-tasks"></i>',
                '<i class="fas fa-chart-line"></i>',
                '<i class="fas fa-file-alt"></i>',
                '<i class="fas fa-headset"></i>',
                '<i class="fas fa-hdd"></i>',
                '<i class="fas fa-bell"></i>'
            ]
        };
        
        return iconSets[planType] || [];
    }

    // Create animated particles
    createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = this.createParticle();
            container.appendChild(particle);
        }
    }

    // Create single particle
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        return particle;
    }

    // Setup scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    // Initialize content
    initializeContent() {
        const lang = this.isArabic ? 'arabic' : 'english';
        this.updateTranslations();
        this.toggleScreenshotView('admin');
        this.updatePlanFeatures();
    }

    // Modal functions
    openModal() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    closeModal() {
        const modal = document.getElementById('signupModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Image modal functions
    openImageModal(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        
        if (modal && modalImg) {
            modal.style.display = 'flex';
            modalImg.src = imageSrc;
        }
    }

    closeImageModal() {
        const modal = document.getElementById('imageModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Get screenshot images data
    getScreenshotImages() {
        return {
            employee: [
                { 
                    src: "images/employee_dashboard.png", 
                    captionAr: "لوحة التحكم - الموظف والمهام المعينة", 
                    captionEn: "Dashboard - Employee & Assigned Tasks" 
                },
                { 
                    src: "images/notifications.png", 
                    captionAr: "الإشعارات", 
                    captionEn: "Notifications" 
                },
                { 
                    src: "images/employee_settings.png", 
                    captionAr: "إعدادات شخصية", 
                    captionEn: "Personal Settings" 
                },
                {
                    src: "images/profile.png", 
                    captionAr: "إعدادات الحساب", 
                    captionEn: "Account Settings" 
                }
            ],
            admin: [
                { 
                    src: "images/dashboard.png", 
                    captionAr: "لوحة التحكم الرئيسية", 
                    captionEn: "Main Dashboard" 
                },
                { 
                    src: "images/Management.png", 
                    captionAr: "إدارة المهام والمشاريع", 
                    captionEn: "Task & Project Management" 
                },
                { 
                    src: "images/performance.png", 
                    captionAr: "التقارير والإحصائيات", 
                    captionEn: "Reports & Statistics" 
                },
                { 
                    src: "images/employees.png", 
                    captionAr: "إعدادات الفريق والصلاحيات", 
                    captionEn: "Team Settings & Permissions" 
                },
                { 
                    src: "images/send_task.png", 
                    captionAr: "إرسال المهام بسهولة", 
                    captionEn: "Send Tasks Easily" 
                },
                { 
                    src: "images/settings.png", 
                    captionAr: "إعدادات سهلة التخصيص", 
                    captionEn: "Easily Customizable Settings" 
                }
            ]
        };
    }

    // Get translations object
    getTranslations() {
        return {
            arabic: {
                mainTitle: "برنامج إدارة مهام- Tasqly",
                subtitle: "إدارة مهام ذكية وسريعة لفرق البرمجة والشركات",
                tryNowBtn: "جرّبه الآن",
                discordBtn: "انضم لخادم Discord",
                screenshotsBtn: "شاهد صور التطبيق",
                featuresTitle: "المميزات",
                feature1Title: "واجهة سهلة الاستخدام",
                feature1Desc: "تصميم بسيط وحديث يساعدك على التركيز على المهام فقط دون تعقيدات.",
                feature2Title: "أداء عالي",
                feature2Desc: "يعمل بكفاءة عالية على جميع الأجهزة مع استهلاك منخفض للذاكرة.",
                feature3Title: "تقارير ذكية",
                feature3Desc: "تابع تقدمك ومهام فريقك مع تقارير تفصيلية ورسوم بيانية احترافية.",
                feature4Title: "مثالي لفرق البرمجة",
                feature4Desc: "مصمم خصيصًا ليناسب احتياجات فرق التطوير مع أدوات متقدمة.",
                feature5Title: "أمان متقدم",
                feature5Desc: "حماية بيانات عالية المستوى مع تشفير من الطراز الأول.",
                feature6Title: "متاح في كل مكان",
                feature6Desc: "اعمل من أي مكان وأي جهاز مع مزامنة فورية للبيانات.",
                screenshotsTitle: "صور من داخل التطبيق",
                plansTitle: "خطط الاشتراك",
                contactTitle: "تواصل معنا",
                tryNowTitle: "جرّبه الآن",
                downloadBtnText: "تحميل البرنامج",
                emailText: "راسلنا عبر الإيميل",
                websiteText: "موقع المطور",
                discordText: "انضم لديسكورد",
                footerText: "© 2025 Tasqly. جميع الحقوق محفوظة.",
                langText: "English",
                // langFlag: "🇺🇸",
                // Free plan
                freePlanName: "الباقة المجانية",
                freePeriod: "/شهر",
                freeFeature1: "حتى 3 موظفين",
                freeFeature2: "حتى 30 مهمة شهرياً",
                freeFeature3: "بدون إشعارات أو إحصائيات متقدمة",
                freeFeature4: "جرب النظام مجاناً",
                freeBtn: "ابدأ مجاناً",
                // Basic plan
                basicPlanName: "الأساسية",
                basicOldPrice: "$5",
                basicCurrency: "$",
                basicPrice: "3",
                basicPeriod: "/شهر",
                basicFeature1: "فريق من 5 أعضاء",
                basicFeature2: "حتى 50 مهمة شهرياً",
                basicFeature3: "تقارير أساسية",
                basicFeature4: "دعم عبر الإيميل",
                basicFeature5: "تخزين 5 جيجا",
                basicFeature6: "إشعارات لحظية",
                basicBtn: "ابدأ الآن",
                // Pro plan
                proPlanName: "المحترفة",
                proOldPrice: "$10",
                proCurrency: "$",
                proPrice: "5",
                proPeriod: "/شهر",
                proFeature1: "فريق من 25 عضو",
                proFeature2: "حتى 100 مهمة شهرياً",
                proFeature3: "إحصائيات متقدمة لكل موظف",
                proFeature4: "تقارير متقدمة",
                proFeature5: "دعم أولوية",
                proFeature6: "تخزين 100 جيجا",
                proFeature8: "إشعارات لحظية",
                proBtn: "ابدأ الآن",
                popularBadge: "الأكثر شعبية",
                employeeText: "واجهة الموظف",
                adminText: "واجهة الأدمن"
            },
            english: {
                mainTitle: "Tasqly - Task Manager",
                subtitle: "Smart and fast task management for programming teams and companies",
                tryNowBtn: "Try It Now",
                discordBtn: "Join Discord Server",
                screenshotsBtn: "View Screenshots",
                featuresTitle: "Features",
                feature1Title: "Easy to Use Interface",
                feature1Desc: "Simple and modern design that helps you focus on tasks without complications.",
                feature2Title: "High Performance",
                feature2Desc: "Works efficiently on all devices with low memory consumption.",
                feature3Title: "Smart Reports",
                feature3Desc: "Track your progress and team tasks with detailed reports and professional charts.",
                feature4Title: "Perfect for Programming Teams",
                feature4Desc: "Specially designed to meet the needs of development teams with advanced tools.",
                feature5Title: "Advanced Security",
                feature5Desc: "High-level data protection with first-class encryption.",
                feature6Title: "Available Everywhere",
                feature6Desc: "Work from anywhere and any device with instant data synchronization.",
                screenshotsTitle: "App Screenshots",
                plansTitle: "Subscription Plans",
                contactTitle: "Contact Us",
                tryNowTitle: "Try It Now",
                downloadBtnText: "Download App",
                emailText: "Contact us by Email",
                websiteText: "Developer Website",
                discordText: "Join Discord",
                footerText: "© 2025 Tasqly. All rights reserved.",
                langText: "العربية",
                // langFlag: "🇪🇬",
                // Free plan
                freePlanName: "Free Tier",
                freePeriod: "/month",
                freeFeature1: "Up to 3 employees",
                freeFeature2: "Up to 30 tasks per month",
                freeFeature3: "No notifications or advanced statistics",
                freeFeature4: "Try the system for free",
                freeBtn: "Start Free",
                // Basic plan
                basicPlanName: "Basic",
                basicOldPrice: "$5",
                basicCurrency: "$",
                basicPrice: "3",
                basicPeriod: "/month",
                basicFeature1: "Team of 5 members",
                basicFeature2: "Up to 50 tasks per month",
                basicFeature3: "Basic reports",
                basicFeature4: "Email support",
                basicFeature5: "5 GB storage",
                basicFeature6: "Instant notifications",
                basicBtn: "Start Now",
                // Pro plan
                proPlanName: "Pro",
                proOldPrice: "$10",
                proCurrency: "$",
                proPrice: "5",
                proPeriod: "/month",
                proFeature1: "Team of 25 members",
                proFeature2: "Up to 100 tasks per month",
                proFeature3: "Advanced stats for each employee",
                proFeature4: "Advanced reports",
                proFeature5: "Priority support",
                proFeature6: "100 GB storage",
                proFeature8: "Instant notifications",
                proBtn: "Start Now",
                popularBadge: "Most Popular",
                employeeText: "Employee View",
                adminText: "Admin View"
            }
        };
    }
}

// Global functions for HTML onclick events
function toggleLanguage() {
    if (window.tasqlyApp) {
        window.tasqlyApp.toggleLanguage();
    }
}

function toggleScreenshotView(view) {
    if (window.tasqlyApp) {
        window.tasqlyApp.toggleScreenshotView(view);
    }
}

function openModal() {
    if (window.tasqlyApp) {
        window.tasqlyApp.openModal();
    }
}

function closeModal() {
    if (window.tasqlyApp) {
        window.tasqlyApp.closeModal();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.tasqlyApp = new TasqlyApp();
});

// Initialize particles when page loads completely
window.addEventListener('load', function() {
    if (window.tasqlyApp) {
        window.tasqlyApp.createParticles();
    }
});