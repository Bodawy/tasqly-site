// Language toggle functionality
let isArabic = true;
let currentScreenshotView = 'admin';

const translations = {
    arabic: {
        mainTitle: "مهامي - Mahami",
        subtitle: "إدارة مهام ذكية وسريعة لفرق البرمجة والشركات",
        tryNowBtn: "جرّبه الآن",
        discordBtn: "انضم لخادم Discord",
        screenshotsBtn: "شاهد صور التطبيق",
        featuresTitle: "⚡ المميزات",
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
        screenshotsTitle: "📸 صور من داخل التطبيق",
        screenshot1: "لوحة التحكم الرئيسية",
        screenshot2: "إدارة المهام والمشاريع",
        screenshot3: "التقارير والإحصائيات",
        screenshot4: "إعدادات الفريق والصلاحيات",
        screenshot5: "إرسال المهام بسهولة",
        screenshot6: "إعدادات سهلة التخصيص",
        contactTitle: "📬 تواصل معنا",
        emailText: "Email: ",
        websiteText: "موقع المطور: ",
        discordText: `Discord: <a href="https://discord.gg/x2rSrq3XWu" target="_blank" rel="noopener">انضم لمجتمعنا</a>`,
        footerText: "© 2025 Mahami. جميع الحقوق محفوظة.",
        langText: "English",
        langFlag: "🇺🇸",
        plansTitle: "💎 خطط الاشتراك",
        basicPlanName: "الأساسية",
        // Basic plan prices
        basicOldPrice: "$5",
        basicCurrency: "$",
        basicPrice: "3",
        basicPeriod: "/شهر",
        basicFeature1: "✅ إدارة حتى 10 مشاريع",
        basicFeature2: "✅ فريق من 5 أعضاء",
        basicFeature3: "✅ تقارير أساسية",
        basicFeature4: "✅ دعم عبر الإيميل",
        basicFeature5: "✅ تخزين 5 جيجا",
        basicFeature6: "✅ إشعارات لحظية",
        proPlanName: "المحترفة",
        
        // Pro plan prices
        proOldPrice: "$10",
        proCurrency: "$",
        proPrice: "5",
        proPeriod: "/شهر",
        proFeature1: "✅ فريق من 25 عضو",
        proFeature2: "✅ حتى 100 مهمة شهرياً",
        proFeature3: "✅ إحصائيات متقدمة لكل موظف",
        proFeature4: "✅ تقارير متقدمة",
        proFeature5: "✅ دعم أولوية",
        proFeature6: "✅ تخزين 100 جيجا",
        proFeature8: "✅ إشعارات لحظية",
        proBtn: "ابدأ الآن",
        popularBadge: "الأكثر شعبية",
        premiumPlanName: "المميزة",
        // Premium plan prices
        premiumOldPrice: "$20",
        premiumCurrency: "$",
        premiumPrice: "15",
        premiumPeriod: "/شهر",
        premiumFeature1: "✅ كل شيء في المحترفة",
        premiumFeature2: "✅ فريق غير محدود",
        premiumFeature3: "✅ تحليلات متقدمة",
        premiumFeature4: "✅ دعم مخصص 24/7",
        premiumFeature5: "✅ تخزين غير محدود",
        premiumFeature6: "✅ ميزات مخصصة",
        premiumBtn: "ابدأ الآن",
        // Free plan
        freePlanName: "الباقة المجانية",
        freePeriod: "/شهر",
        freeFeature1: "✅ حتى 3 موظفين",
        freeFeature2: "✅ حتى 30 مهمة شهرياً",
        freeFeature3: "❌ بدون إشعارات أو إحصائيات متقدمة",
        freeFeature4: "✅ جرب النظام مجاناً",
        employeeText: "واجهة الموظف",
        adminText: "واجهة الأدمن",
        freeBtn: "ابدأ مجاناً",
        basicBtn: "ابدأ الآن",
        proBtn: "ابدأ الآن",
    },
    english: {
        mainTitle: "Mahami - Task Manager",
        subtitle: "Smart and fast task management for programming teams and companies",
        tryNowBtn: "Try It Now",
        discordBtn: "Join Discord Server",
        screenshotsBtn: "View Screenshots",
        featuresTitle: "⚡ Features",
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
        screenshotsTitle: "📸 App Screenshots",
        screenshot1: "Main Dashboard",
        screenshot2: "Task & Project Management",
        screenshot3: "Reports & Statistics",
        screenshot4: "Team Settings & Permissions",
        screenshot5: "Send tasks easily",
        screenshot6: "Easily customizable settings",
        contactTitle: "📬 Contact Us",
        emailText: "Email: ",
        websiteText: "Developer Website: ",
        discordText: `Discord: <a href="https://discord.gg/x2rSrq3XWu" target="_blank" rel="noopener">Join our community</a>`,
        footerText: "© 2025 Mahami. All rights reserved.",
        langText: "العربية",
        langFlag: "🇪🇬",
        plansTitle: "💎 Subscription Plans",
        basicPlanName: "Basic",
        // Basic plan prices
        basicOldPrice: "$5",
        basicCurrency: "$",
        basicPrice: "3",
        basicPeriod: "/month",
        basicFeature1: "✅ Team of 5 members",
        basicFeature2: "✅ Up to 50 tasks per month",
        basicFeature3: "✅ Basic reports",
        basicFeature4: "✅ Email support",
        basicFeature5: "✅ 5 GB storage",
        basicFeature6: "✅ Instant notifications",
        proPlanName: "Pro",
        // Pro plan prices
        proOldPrice: "$10",
        proCurrency: "$",
        proPrice: "5",
        proPeriod: "/month",
        proFeature1: "✅ Team of 25 members",
        proFeature2: "✅ Up to 100 tasks per month",
        proFeature3: "✅ Advanced stats for each employee",
        proFeature4: "✅ Advanced reports",
        proFeature5: "✅ Priority support",
        proFeature6: "✅ 100 GB storage",
        proFeature8: "✅ Instant notifications",
        proBtn: "Start Now",
        popularBadge: "Most Popular",
        premiumPlanName: "Premium",
        // Premium plan prices
        premiumOldPrice: "$20",
        premiumCurrency: "$",
        premiumPrice: "15",
        premiumPeriod: "/month",
        premiumFeature1: "✅ Everything in Pro",
        premiumFeature2: "✅ Unlimited team",
        premiumFeature3: "✅ Advanced analytics",
        premiumFeature4: "✅ 24/7 dedicated support",
        premiumFeature5: "✅ Unlimited storage",
        premiumFeature6: "✅ Custom features",
        premiumBtn: "Start Now",
        // Free plan
        freePlanName: "Free Tier",
        freePeriod: "/month",
        freeFeature1: "✅ Up to 3 employees",
        freeFeature2: "✅ Up to 30 tasks per month",
        freeFeature3: "❌ No notifications or advanced statistics",
        freeFeature4: "✅ Try the system for free",
        employeeText: "Employee View",
        adminText: "Admin View",
        freeBtn: "Start Free",
        basicBtn: "Start Now",
        proBtn: "Start Now",
    }
};

function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = isArabic ? translations.english : translations.arabic;
    ['employeeText', 'adminText'].forEach(key => {
        const el = document.getElementById(key);
        if (el) el.textContent = currentLang[key];
    });

    // Update text direction
    html.setAttribute('dir', isArabic ? 'ltr' : 'rtl');

    // Update all text elements
    Object.keys(currentLang).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'emailText' || key === 'websiteText') {
                element.innerHTML = currentLang[key] + element.querySelector('a').outerHTML;
            } else if (key === 'discordText') {
                element.innerHTML = currentLang[key];
            } else {
                element.textContent = currentLang[key];
            }
        }
    });

    // Update plan prices and currencies (old and new)
    const priceKeys = [
        { old: 'basicOldPrice', currency: 'basicCurrency', price: 'basicPrice', period: 'basicPeriod' },
        { old: 'proOldPrice', currency: 'proCurrency', price: 'proPrice', period: 'proPeriod' },
        { old: 'premiumOldPrice', currency: 'premiumCurrency', price: 'premiumPrice', period: 'premiumPeriod' }
    ];
    priceKeys.forEach(plan => {
        const oldEl = document.getElementById(plan.old);
        const currencyEl = document.getElementById(plan.currency);
        const priceEl = document.getElementById(plan.price);
        const periodEl = document.getElementById(plan.period);
        if (oldEl) oldEl.textContent = currentLang[plan.old];
        if (currencyEl) currencyEl.textContent = currentLang[plan.currency];
        if (priceEl) priceEl.textContent = currentLang[plan.price];
        if (periodEl) periodEl.textContent = currentLang[plan.period];
    });

    // Update screenshot images
    const screenshots = document.querySelectorAll('.screenshot-card img');
    if (isArabic) {
        // English versions
        screenshots[0].src = "images/dashboard.png";
        screenshots[1].src = "images/Management.png";
        screenshots[2].src = "images/performance.png";
        screenshots[3].src = "images/employees.png";
        screenshots[4].src = "images/send_task.png";
        screenshots[5].src = "images/settings.png";
    } else {
        // Arabic versions
        screenshots[0].src = "images/dashboard.png";
        screenshots[1].src = "images/Management.png";
        screenshots[2].src = "images/performance.png";
        screenshots[3].src = "images/employees.png";
        screenshots[4].src = "images/send_task.png";
        screenshots[5].src = "images/settings.png";
    }
    
    // Update screenshot captions based on current view and language
    toggleScreenshotView(currentScreenshotView, isArabic ? 'english' : 'arabic');
    
    updatePlanFeatures(isArabic ? 'english' : 'arabic');

    // Update button texts for plans
    ['freeBtn', 'basicBtn', 'proBtn'].forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn && currentLang[btnId]) btn.textContent = currentLang[btnId];
    });

    isArabic = !isArabic;
}

// Currency values for each plan
const pricingData = {
    USD: {
        free: { price: 0, currency: "$", old: null },
        basic: { price: 3, currency: "$", old: "$5" },
        pro: { price: 5, currency: "$", old: "$10" },
        premium: { price: 15, currency: "$", old: "$20" }
    },
    EGP: {
        free: { price: 0, currency: "ج.م", old: null },
        basic: { price: 90, currency: "ج.م", old: "150ج.م" },
        pro: { price: 150, currency: "ج.م", old: "300ج.م" },
        premium: { price: 450, currency: "ج.م", old: "600ج.م" }
    }
};

function toggleCurrency(currency) {
    // Toggle button active state
    document.getElementById('usdToggle').classList.toggle('active', currency === 'USD');
    document.getElementById('egpToggle').classList.toggle('active', currency === 'EGP');

    // Update Free Plan
    document.getElementById('freeCurrency').textContent = pricingData[currency].free.currency;
    document.getElementById('freePrice').textContent = pricingData[currency].free.price;

    // Update Basic Plan
    document.getElementById('basicCurrency').textContent = pricingData[currency].basic.currency;
    document.getElementById('basicPrice').textContent = pricingData[currency].basic.price;
    document.getElementById('basicOldPrice').textContent = pricingData[currency].basic.old || '';

    // Update Pro Plan
    document.getElementById('proCurrency').textContent = pricingData[currency].pro.currency;
    document.getElementById('proPrice').textContent = pricingData[currency].pro.price;
    document.getElementById('proOldPrice').textContent = pricingData[currency].pro.old || '';

    // Update Premium Plan
    document.getElementById('premiumCurrency').textContent = pricingData[currency].premium.currency;
    document.getElementById('premiumPrice').textContent = pricingData[currency].premium.price;
    document.getElementById('premiumOldPrice').textContent = pricingData[currency].premium.old || '';
}

// Optionally, set default currency on page load
document.addEventListener('DOMContentLoaded', function() {
    toggleCurrency('USD');
    toggleScreenshotView('admin', 'arabic');
    updatePlanFeatures('arabic');
});

// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
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

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function toggleScreenshotView(view, currentLang) {
    const employeeImages = [
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
        },
    ];

    const adminImages = [
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
    ];

    const data = view === 'admin' ? adminImages : employeeImages;
    const container = document.getElementById('screenshotGrid');

    // Clear existing screenshots
    container.innerHTML = '';

    // Determine if we're showing Arabic or English based on currentLang
    const isArabicNow = currentLang === 'arabic';
    
    // Add new screenshots with proper captions based on current language
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'screenshot-card';
        
        // Use the correct caption based on current language
        const caption = isArabicNow ? item.captionAr : item.captionEn;
        
        card.innerHTML = `
            <img src="${item.src}" alt="${caption}">
            <div class="screenshot-overlay">
                <span>${caption}</span>
            </div>
        `;
        container.appendChild(card);
    });

    // Update button states
    document.getElementById('employeeToggle').classList.toggle('active', view === 'employee');
    document.getElementById('adminToggle').classList.toggle('active', view === 'admin');

    currentScreenshotView = view;
}

function updatePlanFeatures(lang) {
    const t = translations[lang];
    // Free plan
    for (let i = 1; i <= 4; i++) {
        const el = document.getElementById(`freeFeature${i}`);
        if (el) el.textContent = t[`freeFeature${i}`];
    }
    // Basic plan
    for (let i = 1; i <= 6; i++) {
        const el = document.getElementById(`basicFeature${i}`);
        if (el) el.textContent = t[`basicFeature${i}`];
    }
    // Pro plan
    // Note: proFeature7 is commented out in your HTML, so skip it
    [1,2,3,4,5,6,8].forEach(i => {
        const el = document.getElementById(`proFeature${i}`);
        if (el) el.textContent = t[`proFeature${i}`];
    });
}