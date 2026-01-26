/* ===== متغيرات عامة ===== */
let isArabic = true;
let isDarkMode = false;

// In-memory settings storage
window.campaignSettings = {
    language: 'ar',
    darkMode: false
};

/* ===== دالة فتح وإغلاق الخطوات ===== */
function toggleSteps(button) {
    const stepsList = button.nextElementSibling;
    
    if (!stepsList || !stepsList.classList.contains('steps-list')) {
        console.error('لم يتم العثور على قائمة الخطوات');
        return;
    }
    
    const isActive = stepsList.classList.contains('active');
    
    // تبديل حالة القائمة
    stepsList.classList.toggle('active');
    
    // تحديث نص الزر والأيقونة
    if (isActive) {
        button.classList.remove('active');
        const lang = isArabic ? 'ar' : 'en';
        button.innerHTML = lang === 'ar' 
            ? '<i class="fas fa-chevron-down"></i> اعرض الخطوات'
            : '<i class="fas fa-chevron-down"></i> Show Steps';
    } else {
        button.classList.add('active');
        const lang = isArabic ? 'ar' : 'en';
        button.innerHTML = lang === 'ar' 
            ? '<i class="fas fa-chevron-up"></i> إخفاء الخطوات'
            : '<i class="fas fa-chevron-up"></i> Hide Steps';
    }
}

/* ===== نظام الترجمة الكامل ===== */
const translations = {
    ar: {
        welcomeTitle: 'مرحباً بك',
        welcomeSubtitle: 'معًا نحو إنترنت أفضل',
        bannerText: 'الموقع الرسمي لحملة الانترنت الغير محدود في مصر',
        siteTitle: 'الانترنت في مصر',
        navOperators: 'الشركات',
        navPhases: 'المراحل',
        navdownloads: 'التحميلات',
        navMission: 'المهمة الحالية',
        navWhy: 'لماذا نطالب',
        navHow: 'كيف تشارك',
        heroTitle: 'مستقبلنا يبدأ بإنترنت غير محدود',
        heroSubtitle: 'معًا لـ #انترنت_غير_محدود_في_مصر',
        btnJoinGroup: 'انضم للجروب',
        btnSignPetition: 'وقّع العريضة',
        counter: 'عدد الموقّعين',
        btnShare: 'شارك الحملة',
        heroNote: 'تم إنشاء هذا الموقع كدعم شخصي، وبشكل غير ربحي نهائي',
        operatorsTitle: 'شركات الاتصالات في مصر',
        ntraName: 'الجهاز القومي',
        ntraDesc: 'الجهاز القومي لتنظيم الاتصالات',
        ntraBadge: 'الجهة التنظيمية',
        eandName: 'إي أند',
        eandDesc: 'شركة اتصالات مصر',
        weName: 'وي',
        weDesc: 'المصرية للاتصالات',
        vodafoneName: 'فودافون',
        vodafoneDesc: 'فودافون مصر',
        orangeName: 'اورنج',
        orangeDesc: 'أورانج مصر',
        phasesTitle: 'مراحل المشاركة في الحملة',
        phasesSubtitle: 'اتبع الخطوات التالية لإيصال صوتك 👇',
        showSteps: 'اعرض الخطوات',
        hideSteps: 'إخفاء الخطوات',
        phase1Title: 'إيصال صوتنا',
        phase1Desc: 'التعبير عن الاستياء بشكل منظم ورسمي',
        phase2Title: 'شكوى هيئة الرقابة الإدارية',
        phase2Desc: 'تقديم شكوى رسمية',
        phase3Title: 'شكاوى NTRA',
        phase3Desc: 'التواصل المباشر مع الجهاز القومي',
        phase4Title: 'شكاوى الشركات',
        phase4Desc: 'التواصل مع شركات الاتصالات الأربع',
        phase5Title: 'منظومة الشكاوى الحكومية',
        phase5Desc: 'القناة الرسمية النهائية للشكاوى',
        missionTitle: 'المهمة الحالية',
        missionTwitter: 'انشر الهاشتاج على تويتر',
        missionActive: 'نشطة',
        btnTwitter: 'شارك على تويتر',
        btnCopy: 'انسخ الهاشتاج',
        whyTitle: 'لماذا نطالب بإنترنت غير محدود؟',
        reason1: 'الإنترنت أصبح خدمة أساسية، لازم يكون متاح للجميع',
        reason2: 'السرعات الحالية لا تكفي للعمل والتعليم الأونلاين',
        reason3: 'الطلاب والباحثين يتضررون من القيود',
        reason4: 'أصحاب الأعمال الصغيرة يعتمدون على الإنترنت',
        reason5: 'الخدمات الحكومية تحتاج إنترنت ثابت',
        reason6: 'معايير الإنترنت في مصر أقل من دول أخرى',
        howTitle: 'كيف تشارك الآن؟',
        step1Title: 'انضم للجروب',
        step1Desc: 'انضم إلى مجتمعنا على فيسبوك',
        btnJoinNow: 'انضم الآن',
        step2Title: 'شارك العريضة',
        step2Desc: 'انشر الرابط مع أصدقائك',
        btnCopyLink: 'نسخ الرابط',
        step3Title: 'ادع أصدقاءك',
        step3Desc: 'شارك الحملة على وسائل التواصل',
        footerFacebook: 'فيسبوك',
        footerTelegram: 'تليجرام',
        footerPrivacy: 'سياسة الخصوصية',
        footerCopyright: '© 2025 حملة الإنترنت غير المحدود - جميع الحقوق محفوظة',
        languageChanged: 'تم تغيير اللغة',
        darkModeEnabled: 'تم تفعيل الوضع الداكن',
        lightModeEnabled: 'تم تفعيل الوضع الفاتح',
        copied: '✅ تم النسخ!',
        copyFailed: '❌ فشل النسخ',
        openingPetition: 'جاري فتح العريضة...',
        updatesPageTitle: "تحديثات الحملة | Unlimited Internet Egypt",
        updatesHeaderTitle: "آخر التحديثات",
        updatesSubtitle: "تابع مسار الحملة خطوة بخطوة",
        update1Title: "انطلاق الموقع الرسمي للحملة",
        update1Desc: "تم بحمد الله إطلاق النسخة التجريبية للموقع لجمع التوقيعات وتنظيم الجهود.",
        updatesPageTitle: "تحديثات الحملة | Unlimited Internet Egypt",
        updatesHeaderTitle: "آخر التحديثات",
        updatesSubtitle: "تابع مسار الحملة وتطورات المطالب الشعبية",
        update1Title: "إطلاق الموقع الرسمي",
        update1Desc: "تم إطلاق هذا القسم لإبقاء الجميع على اطلاع بآخر أخبار الحملة.",
        navUpdates: "التحديثات",
        navHome: "الرئيسية",
        update3Title: "خفض الأسعار.. لجنة الاتصالات تعلن مفاجأة سارة بشأن باقات الإنترنت",
        update3Desc: "في تحرك برلماني جديد، أعلنت لجنة الاتصالات بمجلس النواب عن العمل على مراجعة أسعار الخدمات وجودتها، مع المطالبة بخفض أسعار باقات الإنترنت بما يتناسب مع احتياجات المواطنين.",
        update4Title: "مسؤول بوزارة الاتصالات: خدمات الإنترنت 'بلا حدود' غير مطروحة حالياً",
        update4Desc: "في تصريح لجريدة المال، أفاد المهندس أيمن السعدني أن فكرة الإنترنت غير المحدود ليست محل نقاش في الوقت الحالي، مما يستدعي مواصلة جهودنا.",
    },
    en: {
        updatesPageTitle: "Campaign Updates | Unlimited Internet Egypt",
        update3Title: "Price Reduction.. Communications Committee Announces Good News Regarding Internet Bundles",
        update3Desc: "In a new parliamentary move, the Communications Committee of the House of Representatives announced efforts to review service prices and quality, demanding lower internet prices.",
        update4Title: "Official: 'Unlimited' Internet Services Not Currently Under Discussion",
        update4Desc: "In a statement to Al-Mal Newspaper, Eng. Ayman El-Saadani stated that unlimited internet is not currently being discussed, highlighting the need to continue our efforts.",
        updatesHeaderTitle: "Latest Updates",
        updatesSubtitle: "Follow the campaign progress and developments",
        update1Title: "Official Website Launch",
        update1Desc: "This section was launched to keep everyone updated on the campaign.",
        navUpdates: "Updates",
        navHome: "Home",
        welcomeTitle: 'Welcome',
        welcomeSubtitle: 'Together towards better internet',
        bannerText: 'Official Website for Unlimited Internet Campaign in Egypt',
        siteTitle: 'Internet in Egypt',
        navOperators: 'Operators',
        navPhases: 'Phases',
        navdownloads: 'Downloads',
        navMission: 'Current Mission',
        navWhy: 'Why We Demand',
        navHow: 'How to Participate',
        heroTitle: 'Our Future Starts with Unlimited Internet',
        heroSubtitle: 'Together for #UnlimitedInternetInEgypt',
        btnJoinGroup: 'Join the Group',
        btnSignPetition: 'Sign the Petition',
        counter: 'Number of Signatories',
        btnShare: 'Share Campaign',
        heroNote: 'This website was created as personal support, completely non-profit',
        operatorsTitle: 'Telecom Operators in Egypt',
        ntraName: 'NTRA',
        ntraDesc: 'National Telecom Regulatory Authority',
        ntraBadge: 'Regulatory Authority',
        eandName: 'e&',
        eandDesc: 'Etisalat Egypt',
        weName: 'WE',
        weDesc: 'Telecom Egypt',
        vodafoneName: 'Vodafone',
        vodafoneDesc: 'Vodafone Egypt',
        orangeName: 'Orange',
        orangeDesc: 'Orange Egypt',
        phasesTitle: 'Campaign Participation Phases',
        phasesSubtitle: 'Follow the steps below to deliver your voice 👇',
        showSteps: 'Show Steps',
        hideSteps: 'Hide Steps',
        phase1Title: 'Delivering Our Voice',
        phase1Desc: 'Express dissatisfaction in an organized and official manner',
        phase2Title: 'Administrative Control Complaint',
        phase2Desc: 'Submit official complaint',
        phase3Title: 'NTRA Complaints',
        phase3Desc: 'Direct contact with the National Authority',
        phase4Title: 'Operator Complaints',
        phase4Desc: 'Contact the four telecom operators',
        phase5Title: 'Government Complaints System',
        phase5Desc: 'The official final channel for complaints',
        missionTitle: 'Current Mission',
        missionTwitter: 'Spread the Hashtag on Twitter',
        missionActive: 'Active',
        btnTwitter: 'Share on Twitter',
        btnCopy: 'Copy Hashtag',
        whyTitle: 'Why Do We Demand Unlimited Internet?',
        reason1: 'Internet has become an essential service, must be available for all',
        reason2: 'Current speeds are insufficient for work and online education',
        reason3: 'Students and researchers suffer from limitations',
        reason4: 'Small business owners depend on internet',
        reason5: 'Government services need stable internet',
        reason6: 'Internet standards in Egypt are lower than other countries',
        howTitle: 'How to Participate Now?',
        step1Title: 'Join the Group',
        step1Desc: 'Join our community on Facebook',
        btnJoinNow: 'Join Now',
        step2Title: 'Share the Petition',
        step2Desc: 'Spread the link with your friends',
        btnCopyLink: 'Copy Link',
        step3Title: 'Invite Your Friends',
        step3Desc: 'Share the campaign on social media',
        footerFacebook: 'Facebook',
        footerTelegram: 'Telegram',
        footerPrivacy: 'Privacy Policy',
        footerCopyright: '© 2025 Unlimited Internet Campaign - All Rights Reserved',
        languageChanged: 'Language changed',
        darkModeEnabled: 'Dark mode enabled',
        lightModeEnabled: 'Light mode enabled',
        copied: '✅ Copied!',
        copyFailed: '❌ Copy failed',
        openingPetition: 'Opening petition...',
        updatesPageTitle: "Campaign Updates | Unlimited Internet Egypt",
        updatesHeaderTitle: "Latest Updates",
        updatesSubtitle: "Follow the campaign progress step by step",
        update1Title: "Official Website Launch",
        update1Desc: "The beta version of the website has been launched to collect signatures and organize efforts.",
        navUpdates: "Updates"
    }
};

/* ===== التهيئة عند تحميل الصفحة ===== */
document.addEventListener('DOMContentLoaded', function() {
    try {
        setTimeout(() => {
            const welcomeScreen = document.getElementById('welcomeScreen');
            if (welcomeScreen) {
                welcomeScreen.classList.add('hide');
            }
        }, 2500);
        
        initMobileMenu();
        initLanguageToggle();
        initDarkMode();
        initSmoothScroll();
        initIntersectionObserver();
        loadSettings();
        
        console.log('Campaign website loaded successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

/* ===== القائمة المنسدلة ===== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ===== تبديل اللغة ===== */
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    isArabic = !isArabic;
    const lang = isArabic ? 'ar' : 'en';
    const dir = isArabic ? 'rtl' : 'ltr';
    
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    document.body.style.direction = dir;
    
    updateAllTranslations(lang);
    updateMultiLanguageElements(lang);
    
    saveSettings();
    showToast(translations[lang].languageChanged);
}

function updateAllTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function updateMultiLanguageElements(lang) {
    document.querySelectorAll('[lang]').forEach(element => {
        const elementLang = element.getAttribute('lang');
        if (elementLang === lang) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });
}

/* ===== الوضع الداكن ===== */
function initDarkMode() {
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.innerHTML = isDarkMode ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
    
    saveSettings();
    
    const lang = isArabic ? 'ar' : 'en';
    const message = isDarkMode ? 
        translations[lang].darkModeEnabled : 
        translations[lang].lightModeEnabled;
    showToast(message);
}

/* ===== التمرير السلس ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 150;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===== Intersection Observer ===== */
function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===== فتح العريضة ===== */
function openPetition() {
    const lang = isArabic ? 'ar' : 'en';
    showToast(translations[lang].openingPetition);
    
    const petitionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfxsw43WwwSXzad5Vt8hJDMzIhTECoUCNLvmVJ0u9KAFHEyQQ/viewform';
    window.open(petitionUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة الموقع ===== */
function openShare() {
    const shareData = {
        title: isArabic ? 'حملة الإنترنت غير المحدود في مصر' : 'Unlimited Internet Campaign in Egypt',
        text: isArabic ? 'انضم لحملة #انترنت_غير_محدود_في_مصر' : 'Join #UnlimitedInternetEgypt campaign',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData).catch(() => fallbackCopy(shareData.url));
    } else {
        fallbackCopy(shareData.url);
    }
}

/* ===== نسخ النص ===== */
function fallbackCopy(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => {
                const lang = isArabic ? 'ar' : 'en';
                showToast(translations[lang].copied);
            })
            .catch(() => legacyCopy(text));
    } else {
        legacyCopy(text);
    }
}

function legacyCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    try {
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        
        const lang = isArabic ? 'ar' : 'en';
        showToast(translations[lang].copied);
    } catch (err) {
        const lang = isArabic ? 'ar' : 'en';
        showToast(translations[lang].copyFailed);
    }
    
    document.body.removeChild(textarea);
}

/* ===== مشاركة على تويتر ===== */
function shareToTwitter() {
    const hashtag = '#انترنت_غير_محدود_في_مصر';
    const text = isArabic 
        ? `${hashtag}\n\nنطالب بإنترنت غير محدود وعادل للجميع في مصر!`
        : `#UnlimitedInternetEgypt\n\nWe demand fair and unlimited internet for all in Egypt!`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, '_blank', 'width=550,height=420,noopener,noreferrer');
}

/* ===== نسخ الهاشتاج ===== */
function copyHashtag() {
    const hashtag = isArabic ? '#انترنت_غير_محدود_في_مصر' : '#UnlimitedInternetEgypt';
    fallbackCopy(hashtag);
}

/* ===== نسخ رابط العريضة ===== */
function copyPetitionLink() {
    const petitionUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfxsw43WwwSXzad5Vt8hJDMzIhTECoUCNLvmVJ0u9KAFHEyQQ/viewform";
    fallbackCopy(petitionUrl);
}

/* ===== مشاركة على واتساب ===== */
function shareToWhatsApp() {
    const text = isArabic ? 
        'انضم لحملة #انترنت_غير_محدود_في_مصر' : 
        'Join #UnlimitedInternetEgypt campaign';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + '\n' + window.location.href)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة على تليجرام ===== */
function shareToTelegram() {
    const text = isArabic ? 
        'انضم لحملة #انترنت_غير_محدود_في_مصر' : 
        'Join #UnlimitedInternetEgypt campaign';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
}

/* ===== مشاركة على فيسبوك ===== */
function shareToFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
}

/* ===== إظهار Toast ===== */
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/* ===== حفظ الإعدادات ===== */
function saveSettings() {
    window.campaignSettings = {
        language: isArabic ? 'ar' : 'en',
        darkMode: isDarkMode,
        lastUpdated: new Date().toISOString()
    };
    
    try {
        if (window.localStorage) {
            localStorage.setItem('campaignSettings', JSON.stringify(window.campaignSettings));
        }
    } catch (e) {
        console.warn('localStorage not available');
    }
}

/* ===== تحميل الإعدادات ===== */
function loadSettings() {
    try {
        if (window.localStorage) {
            const stored = localStorage.getItem('campaignSettings');
            if (stored) {
                window.campaignSettings = JSON.parse(stored);
            }
        }
        
        const settings = window.campaignSettings || {};
        
        if (settings.language === 'en') {
            isArabic = false;
            document.documentElement.setAttribute('lang', 'en');
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.direction = 'ltr';
            updateAllTranslations('en');
            updateMultiLanguageElements('en');
        }
        
        if (settings.darkMode) {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            const darkToggle = document.getElementById('darkToggle');
            if (darkToggle) {
                darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    } catch (error) {
        console.warn('Settings loading error:', error);
    }
}

/* ===== معالجة الأخطاء ===== */
window.addEventListener('error', function(event) {
    console.error('Error:', event.message);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled rejection:', event.reason);
});

/* ===== تصدير الدوال ===== */
window.campaignFunctions = {
    toggleSteps,
    openPetition,
    openShare,
    shareToTwitter,
    copyHashtag,
    copyPetitionLink,
    shareToWhatsApp,
    shareToTelegram,
    shareToFacebook,
    showToast,
    toggleLanguage,
    toggleDarkMode,
    updateMultiLanguageElements
};