/* ===== ملف JavaScript (الوظائف) ===== */

/* ===== JS Block 1 ===== */


/* ===== JS Block 2 ===== */
window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-LV29X3081P');

/* ===== JS Block 3 ===== */
function openPetition() {
   window.open('https://forms.gle/GdPd6QE9GkbYQeiV9', '_blank');
}

function openShare() {
  if (navigator.share) {
    navigator.share({
      title: 'انترنت غير محدود في مصر',
      text: ' https://2h.ae/unlimited-internet معًا لــ #انترنت_غير_محدود_في_مصر',
      url: window.location.href
    });
  } else {
    // نسخ الرابط للحافظة
    navigator.clipboard.writeText(window.location.href);
    alert('تم نسخ رابط الموقع');
  }
}

/* ===== JS Block 4 ===== */
// بيانات المهمة
let missionData = {
  hashtag: ' #انترنت_غير_محدود_في_مصر',
  currentShares: 0
};

// مشاركة على تويتر
function shareToTwitter() {
  const hashtag = missionData.hashtag;
  const text = `${hashtag} < اكتب جملتك > `;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  
  window.open(url, '_blank', 'width=550,height=420');
}

// نسخ الهاشتاج
function copyHashtag() {
  const hashtag = missionData.hashtag;
 
  if (navigator.clipboard) {
    navigator.clipboard.writeText(hashtag).then(() => {
      showToast('تم نسخ الهاشتاج!');
    }).catch(() => {
      fallbackCopy(hashtag);
    });
  } else {
    fallbackCopy(hashtag);
  }
}

// نسخ بديل للمتصفحات القديمة
function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast('تم نسخ الهاشتاج! ');
  } catch (err) {
    showToast('فشل في النسخ، انسخ يدوياً');
  }
  
  document.body.removeChild(textArea);
}

// عرض إشعار
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
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // إخفاء التوست بعد 3 ثوانٍ
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

/* ===== JS Block 5 ===== */
function trackClick(action) {
  console.log('تم النقر على:', action, new Date().toLocaleString('ar-EG'));
}

function updateSiteUrl(siteUrl) {
  const links = document.querySelectorAll('a[href*="https://ziadmohamed-w7.github.io/campaign-site/"]');
  links.forEach(link => {
    link.href = link.href.replace('https://ziadmohamed-w7.github.io/campaign-site/', siteUrl);
  });
}

// زر نسخ الرابط
function copyPetitionLink() {
  const petitionLink = "https://docs.google.com/forms/d/e/1FAIpQLSfxsw43WwwSXzad5Vt8hJDMzIhTECoUCNLvmVJ0u9KAFHEyQQ/viewform";
  navigator.clipboard.writeText(petitionLink).then(() => {
    alert("تم نسخ رابط العريضة ✅");
  });
}

// تحسين إمكانية الوصول
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#how a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });
});

/* ===== JS Block 6 ===== */
var sc_project=13162706; 
var sc_invisible=1; 
var sc_security="367c0bc1";

/* ===== JS Block 7 ===== */


/* ===== JS Block 8 ===== */
function openShare(){
    const shareData={
      title:'حملة الإنترنت غير المحدود',
      text:'انضم لحملة #انترنت_غير_محدود_في_مصر وشارك صوتك معنا!',
      url:location.href
    };
    if(navigator.share){
      navigator.share(shareData).catch(()=>fallbackCopy(shareData.url));
    }else{
      fallbackCopy(shareData.url);
    }
  }
  function fallbackCopy(text){
    navigator.clipboard?.writeText(text)
      .then(()=>alert('✅ تم نسخ الرابط!'))
      .catch(()=>{
        const i=document.createElement('input');i.value=text;
        document.body.appendChild(i);i.select();
        document.execCommand('copy');
        document.body.removeChild(i);
        alert('✅ تم نسخ الرابط!');
      });
  }

