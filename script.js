/* ===== ملف JavaScript المحسّن للموقع ===== */

// =====================================
// 1. إعدادات عامة وثوابت
// =====================================
const CONFIG = {
  PETITION_URL: 'https://forms.gle/GdPd6QE9GkbYQeiV9',
  PETITION_LINK: "https://docs.google.com/forms/d/e/1FAIpQLSfxsw43WwwSXzad5Vt8hJDMzIhTECoUCNLvmVJ0u9KAFHEyQQ/viewform",
  SITE_URL: window.location.href,
  HASHTAG: '#انترنت_غير_محدود_ياNTRA',
  TOAST_DURATION: 3000,
  WELCOME_SCREEN_DURATION: 2000
};

// =====================================
// 2. إدارة شاشة الترحيب
// =====================================
function initWelcomeScreen() {
  const welcomeScreen = document.getElementById('welcomeScreen');
  if (!welcomeScreen) return;

  setTimeout(() => {
    welcomeScreen.classList.add('hide');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 600);
  }, CONFIG.WELCOME_SCREEN_DURATION);
}

// =====================================
// 3. إدارة القائمة المتجاوبة
// =====================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // إغلاق القائمة عند النقر على رابط
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // إغلاق القائمة عند النقر خارجها
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// =====================================
// 4. الوضع الليلي
// =====================================
function initDarkMode() {
  const darkToggle = document.getElementById('darkToggle');
  if (!darkToggle) return;

  // تحميل الإعداد المحفوظ
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon(true);
  }

  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateDarkModeIcon(isDark);
    showToast(isDark ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️');
  });
}

function updateDarkModeIcon(isDark) {
  const icon = document.querySelector('#darkToggle i');
  if (icon) {
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// =====================================
// 5. تبديل اللغة (العربية/الإنجليزية)
// =====================================
const translations = {
  ar: {
    welcomeTitle: 'مرحباً بك',
    welcomeSubtitle: 'معًا نحو إنترنت أفضل',
    bannerText: 'الموقع الرسمي لحملة الانترنت الغير محدود في مصر',
    siteTitle: 'الانترنت في مصر',
    // يمكن إضافة المزيد من الترجمات حسب الحاجة
  },
  en: {
    welcomeTitle: 'Welcome',
    welcomeSubtitle: 'Together for Better Internet',
    bannerText: 'Official Website for Unlimited Internet Campaign in Egypt',
    siteTitle: 'Internet in Egypt',
    // يمكن إضافة المزيد من الترجمات حسب الحاجة
  }
};

function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;

  let currentLang = localStorage.getItem('language') || 'ar';
  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', currentLang);
    applyLanguage(currentLang);
    showToast(currentLang === 'ar' ? 'تم التبديل للعربية' : 'Switched to English');
  });
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // تبديل العناصر بناءً على اللغة
  document.querySelectorAll('[lang="ar"]').forEach(el => {
    el.style.display = lang === 'ar' ? '' : 'none';
  });
  document.querySelectorAll('[lang="en"]').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });

  // تغيير اتجاه الصفحة
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
}

// =====================================
// 6. إدارة المراحل (Toggle Steps)
// =====================================
function toggleSteps(button) {
  const stepsList = button.nextElementSibling;
  const icon = button.querySelector('i');
  
  if (!stepsList) return;

  stepsList.classList.toggle('active');
  button.classList.toggle('active');
  
  if (icon) {
    icon.className = stepsList.classList.contains('active') 
      ? 'fas fa-chevron-up' 
      : 'fas fa-chevron-down';
  }

  // تحديث نص الزر
  const buttonText = button.querySelector('span');
  if (buttonText) {
    const isArabic = document.documentElement.lang === 'ar';
    buttonText.textContent = stepsList.classList.contains('active')
      ? (isArabic ? 'إخفاء الخطوات' : 'Hide Steps')
      : (isArabic ? 'اعرض الخطوات' : 'Show Steps');
  }
}

// =====================================
// 7. إدارة المشاركة عبر وسائل التواصل
// =====================================
function shareToWhatsApp() {
  const text = encodeURIComponent(`انضم لحملة #انترنت_غير_محدود_في_مصر وشارك صوتك معنا!\n${CONFIG.SITE_URL}`);
  const url = `https://wa.me/?text=${text}`;
  
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
  
  trackClick('WhatsApp Share');
}

function shareToTelegram() {
  const text = encodeURIComponent(`انضم لحملة #انترنت_غير_محدود_في_مصر`);
  const url = `https://t.me/share/url?url=${CONFIG.SITE_URL}&text=${text}`;
  
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
  
  trackClick('Telegram Share');
}

function shareToFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${CONFIG.SITE_URL}`;
  
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  if (newWindow) newWindow.opener = null;
  
  trackClick('Facebook Share');
}

function shareToTwitter() {
  const hashtag = CONFIG.HASHTAG;
  const text = `${hashtag} - انضم للحملة الآن!`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${CONFIG.SITE_URL}`;
  
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer,width=550,height=420');
  if (newWindow) newWindow.opener = null;
  
  trackClick('Twitter Share');
}

// =====================================
// 8. نسخ النصوص (Hashtag, Links, Tweets)
// =====================================
function copyHashtag() {
  copyToClipboard(CONFIG.HASHTAG, 'تم نسخ الهاشتاج! ✅');
  trackClick('Copy Hashtag');
}

function copyPetitionLink() {
  copyToClipboard(CONFIG.PETITION_LINK, 'تم نسخ رابط العريضة ✅');
  trackClick('Copy Petition Link');
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMessage))
      .catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.style.pointerEvents = 'none';
  document.body.appendChild(textArea);
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast(successMessage || 'تم النسخ!');
  } catch (err) {
    showToast('فشل النسخ، حاول مرة أخرى');
    console.error('Copy failed:', err);
  }
  
  document.body.removeChild(textArea);
}

// =====================================
// 9. إشعارات Toast
// =====================================
function showToast(message) {
  // إزالة أي toast موجود
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // إظهار التوست
  setTimeout(() => toast.classList.add('show'), 100);
  
  // إخفاء التوست
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, CONFIG.TOAST_DURATION);
}

// =====================================
// 10. فتح العريضة والمشاركة
// =====================================
function openPetition() {
  // فتح في نافذة/تاب جديد بدون العودة للصفحة الرئيسية
  const newWindow = window.open(CONFIG.PETITION_URL, '_blank', 'noopener,noreferrer');
  
  // التأكد من فتح الرابط حتى لو كان popup blocker مفعل
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    // إذا فشل الفتح في نافذة جديدة، نفتحه في نفس النافذة
    window.location.href = CONFIG.PETITION_URL;
  } else {
    // منع الصفحة الحالية من التغيير
    newWindow.opener = null;
  }
  
  trackClick('Open Petition');
}

function openShare() {
  const shareData = {
    title: 'حملة الإنترنت غير المحدود',
    text: 'انضم لحملة #انترنت_غير_محدود_في_مصر وشارك صوتك معنا!',
    url: CONFIG.SITE_URL
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => trackClick('Native Share Success'))
      .catch(() => fallbackCopy(shareData.url, '✅ تم نسخ الرابط!'));
  } else {
    fallbackCopy(shareData.url, '✅ تم نسخ الرابط!');
  }
}

// =====================================
// 11. نسخ التغريدات النموذجية
// =====================================
function initTweetCopyButtons() {
  document.querySelectorAll('.copy-tweet-btn').forEach(button => {
    button.addEventListener('click', function() {
      const tweetCard = this.closest('.sample-tweet');
      const tweetText = tweetCard.querySelector('p').textContent.trim();
      
      copyToClipboard(tweetText, 'تم نسخ التغريدة! ✅');
      tweetCard.classList.add('copied');
      
      setTimeout(() => {
        tweetCard.classList.remove('copied');
      }, 2000);
    });
  });
}

// =====================================
// 12. التمرير السلس للروابط الداخلية
// =====================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// =====================================
// 13. تتبع النقرات والتحليلات
// =====================================
function trackClick(action) {
  console.log('🔘 Track:', action, new Date().toLocaleString('ar-EG'));
  
  // إرسال لـ Google Analytics إذا كان متاحاً
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      event_category: 'engagement',
      event_label: action
    });
  }
}

// =====================================
// 14. تحديث عدد التوقيعات (ديناميكي)
// =====================================
function updatePetitionCount() {
  const countElement = document.getElementById('count');
  if (!countElement) return;
  
  // يمكن تحديث هذا من API أو قاعدة بيانات
  // حالياً نستخدم قيمة ثابتة
  const currentCount = '4.8 الف';
  countElement.textContent = currentCount;
}

// =====================================
// 15. تحسين الأداء - Lazy Loading للصور
// =====================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// =====================================
// 16. إدارة الأخطاء العامة
// =====================================
function initErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('❌ Error:', e.message);
    // يمكن إرسال الأخطاء لخدمة تتبع مثل Sentry
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled Promise:', e.reason);
  });
}

// =====================================
// 17. تحسين إمكانية الوصول (Accessibility)
// =====================================
function initAccessibility() {
  // إضافة aria-label للأزرار بدون نص
  document.querySelectorAll('button:not([aria-label])').forEach(button => {
    if (!button.textContent.trim()) {
      button.setAttribute('aria-label', 'زر');
    }
  });

  // إضافة rel="noopener noreferrer" للروابط الخارجية ومنعها من التأثير على الصفحة الحالية
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const rel = link.getAttribute('rel') || '';
    if (!rel.includes('noopener')) {
      link.setAttribute('rel', (rel + ' noopener noreferrer').trim());
    }
    
    // إضافة event listener لمنع الرجوع للصفحة الرئيسية
    link.addEventListener('click', function(e) {
      // السماح للرابط بالفتح بشكل طبيعي
      setTimeout(() => {
        // إزالة المرجع للنافذة الحالية
        if (this.target === '_blank') {
          window.opener = null;
        }
      }, 100);
    });
  });

  // التركيز على العناصر التفاعلية بالكيبورد
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
}

// =====================================
// 18. Google Analytics
// =====================================
function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-LV29X3081P');
}

// =====================================
// 19. StatCounter
// =====================================
function initStatCounter() {
  window.sc_project = 13162706;
  window.sc_invisible = 1;
  window.sc_security = "367c0bc1";
}

// =====================================
// 20. تهيئة جميع الوظائف عند تحميل الصفحة
// =====================================
function init() {
  // التهيئة الأساسية
  initWelcomeScreen();
  initMobileMenu();
  initDarkMode();
  initLanguageToggle();
  initSmoothScroll();
  initAccessibility();
  initErrorHandling();
  
  // المحتوى التفاعلي
  initTweetCopyButtons();
  updatePetitionCount();
  initLazyLoading();
  
  // التحليلات
  initGoogleAnalytics();
  initStatCounter();
  
  console.log('✅ تم تحميل الموقع بنجاح!');
}

// =====================================
// 21. تشغيل عند تحميل الصفحة
// =====================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =====================================
// 22. تصدير الوظائف للاستخدام العام
// =====================================
window.campaignSite = {
  openPetition,
  openShare,
  shareToWhatsApp,
  shareToTelegram,
  shareToFacebook,
  shareToTwitter,
  copyHashtag,
  copyPetitionLink,
  toggleSteps,
  showToast,
  trackClick
};