/* Runs in <head> before the page paints: picks the language and, for Arabic,
   sets right-to-left at once so the layout never flashes in English.
   Order: ?lang=ar|en in the address, then the visitor's last choice, then the browser language. */
(function () {
  var lang;
  try {
    var param = new URLSearchParams(window.location.search).get('lang');
    lang = (param === 'ar' || param === 'en') ? param : window.localStorage.getItem('qimma-lang');
  } catch (e) {}
  if (lang !== 'ar' && lang !== 'en') {
    lang = /^ar\b/i.test(navigator.language || '') ? 'ar' : 'en';
  }
  window.__qimmaLang = lang;
  if (lang === 'ar') {
    var root = document.documentElement;
    root.lang = 'ar';
    root.dir = 'rtl';
    root.classList.add('i18n-wait');
  }
})();
