/* Qimma Labs: language switch, mobile menu, example chat, copy email. */
(function () {
  'use strict';

  var EMAIL = 'hello@qimmalabs.com';

  /* All page text in both languages. The English also sits in index.html,
     so the page reads correctly even before (or without) this script. */
  var STRINGS = {
    en: {
      'meta.title': 'Qimma Labs · Software studio in Amman',
      'meta.desc': 'Websites, mobile apps, AI automation and internal systems for businesses in Jordan, the Gulf and beyond. Fixed prices, built in Arabic and English.',
      'skip': 'Skip to content',
      'home': 'Qimma Labs, home',
      'nav.label': 'Main',
      'nav.services': 'Services',
      'nav.how': 'How we work',
      'nav.desk': 'Qimma Desk',
      'nav.about': 'About',
      'lang.label': 'Language',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'cta': 'Book a free call',
      'hero.label': 'Introduction',
      'hero.title': 'We build the software your business runs on.',
      'hero.lead': 'Websites, mobile apps, AI automation and internal systems for businesses in Jordan, the Gulf and beyond. Fixed prices, built in Arabic and English.',
      'hero.see': 'See our services',
      'bar.left': 'Build · Automate · Scale',
      'bar.right': 'Amman, Jordan',
      'n1': '01', 'n2': '02', 'n3': '03', 'n4': '04',
      'services.title': 'What we build',
      's1.t': 'Websites & web apps',
      's1.b': 'Bilingual websites, and web apps with logins, databases and admin panels.',
      's2.t': 'Mobile apps',
      's2.b': 'iOS and Android apps from one codebase, published to both stores.',
      's3.t': 'AI automation',
      's3.b': 'WhatsApp assistants and workflows that take repetitive work off your team.',
      's4.t': 'Systems & dashboards',
      's4.b': 'Booking, inventory and customer systems, and dashboards that put your numbers on one screen.',
      'services.quote': 'Every project gets a fixed quote after a free 30-minute call.',
      'how.title': 'How we work',
      'how.side': 'One point of contact from the first call to launch. Payment follows the work.',
      'st1.t': 'Talk', 'st1.b': 'A free 30-minute call to understand your business.', 'st1.m': 'Free',
      'st2.t': 'Scope', 'st2.b': 'A written plan with features, timeline and a fixed price.', 'st2.m': '40% deposit',
      'st3.t': 'Build', 'st3.b': 'You see working software halfway.', 'st3.m': '30% at the demo',
      'st4.t': 'Launch', 'st4.b': 'We hand over code, accounts and data. Optional monthly care.', 'st4.m': '30% at launch',
      'desk.name': 'Qimma Desk · our product',
      'desk.title': 'A receptionist that never sleeps.',
      'desk.body': 'Your customers ask about prices and opening hours, book, reschedule and cancel in Arabic or English, at any hour. Bookings go straight into your schedule, and anything that needs a person is passed to your team.',
      'desk.suits': 'It suits clinics, salons, gyms, restaurants, shops and any business that takes bookings.',
      'f1.k': 'Languages', 'f1.v': 'Arabic, Jordanian dialect and English',
      'f2.k': 'Runs on', 'f2.v': 'WhatsApp Business',
      'f3.k': 'Hosting', 'f3.v': 'Hosted for you, or self-hosted for larger organisations',
      'chat.label': 'Example conversation',
      'chat.langLabel': 'Conversation language',
      'about.title': 'An engineering studio, founded in Amman.',
      'about.body': 'Qimma Labs was founded by Aram Alhaddad (آرام الحداد), a full-stack engineer with more than five years of experience building web platforms, back-end systems and databases that organisations in Jordan rely on every day. Every project has one point of contact from the first call to launch, clear updates along the way, and no surprises on the invoice.',
      'about.human': 'Before software, Aram trained as a pianist, and he still teaches. Both reward the same habits: practice, patience and getting the details right.',
      'p.label': 'Our principles',
      'p1.t': 'Arabic and English from the start', 'p1.b': 'Designed in both languages, not translated at the end.',
      'p2.t': 'A fixed price, in writing', 'p2.b': 'A written plan with features, timeline and price before any work starts.',
      'p3.t': 'Your data stays yours', 'p3.b': 'Custom projects come with the full code; with our products, your data, accounts and WhatsApp number are always yours.',
      'contact.title': 'Tell us what’s slowing your business down.',
      'contact.body': 'A short message is enough. We usually reply within one working day, and the first call is free.',
      'copy': 'Copy',
      'copied': 'Copied',
      'copied.msg': 'Email address copied',
      'whatsapp': 'Message us on WhatsApp',
      'follow': 'Follow us',
      'foot.left': '© 2026 Qimma Labs, Amman',
      'foot.right': 'Qimma (قمّة) is Arabic for summit.'
    },
    ar: {
      'meta.title': 'قمّة لابز · استوديو برمجيات في عمّان',
      'meta.desc': 'مواقع إلكترونية وتطبيقات جوال وأتمتة بالذكاء الاصطناعي وأنظمة داخلية للشركات في الأردن والخليج وخارجهما. أسعار ثابتة، وكل ما نبنيه بالعربية والإنجليزية.',
      'skip': 'انتقل إلى المحتوى',
      'home': 'قمّة لابز، الصفحة الرئيسية',
      'nav.label': 'القائمة الرئيسية',
      'nav.services': 'الخدمات',
      'nav.how': 'كيف نعمل',
      'nav.desk': 'قمّة ديسك',
      'nav.about': 'من نحن',
      'lang.label': 'اللغة',
      'menu.open': 'فتح القائمة',
      'menu.close': 'إغلاق القائمة',
      'cta': 'احجز مكالمة مجانية',
      'hero.label': 'مقدمة',
      'hero.title': 'نبني البرمجيات التي يقوم عليها عملك.',
      'hero.lead': 'مواقع إلكترونية وتطبيقات جوال وأتمتة بالذكاء الاصطناعي وأنظمة داخلية للشركات في الأردن والخليج وخارجهما. أسعار ثابتة، وكل ما نبنيه بالعربية والإنجليزية.',
      'hero.see': 'تعرّف على خدماتنا',
      'bar.left': 'بناء · أتمتة · نمو',
      'bar.right': 'عمّان، الأردن',
      'n1': '٠١', 'n2': '٠٢', 'n3': '٠٣', 'n4': '٠٤',
      'services.title': 'ماذا نبني',
      's1.t': 'مواقع وتطبيقات ويب',
      's1.b': 'مواقع ثنائية اللغة، وتطبيقات ويب بتسجيل دخول وقواعد بيانات ولوحات إدارة.',
      's2.t': 'تطبيقات الجوال',
      's2.b': 'تطبيقات iOS و Android من قاعدة برمجية واحدة، تُنشر على المتجرين.',
      's3.t': 'أتمتة بالذكاء الاصطناعي',
      's3.b': 'مساعدون على واتساب وسير عمل يرفعون الأعمال المتكررة عن فريقك.',
      's4.t': 'أنظمة ولوحات بيانات',
      's4.b': 'أنظمة للحجوزات والمخزون والعملاء، ولوحات تجمع أرقامك في شاشة واحدة.',
      'services.quote': 'كل مشروع يحصل على عرض سعر ثابت بعد مكالمة مجانية مدتها ٣٠ دقيقة.',
      'how.title': 'كيف نعمل',
      'how.side': 'جهة تواصل واحدة من أول مكالمة حتى الإطلاق، والدفع يتبع سير العمل.',
      'st1.t': 'نتحدّث', 'st1.b': 'مكالمة مجانية مدتها ٣٠ دقيقة لنفهم عملك.', 'st1.m': 'مجاناً',
      'st2.t': 'نخطّط', 'st2.b': 'خطة مكتوبة بالميزات والجدول الزمني وسعر ثابت.', 'st2.m': 'دفعة مقدّمة ٤٠٪',
      'st3.t': 'نبني', 'st3.b': 'ترى برنامجاً يعمل في منتصف الطريق.', 'st3.m': '٣٠٪ عند العرض التجريبي',
      'st4.t': 'نُطلق', 'st4.b': 'نسلّمك الكود والحسابات والبيانات، مع رعاية شهرية اختيارية.', 'st4.m': '٣٠٪ عند الإطلاق',
      'desk.name': 'قمّة ديسك · منتجنا',
      'desk.title': 'موظف استقبال لا ينام.',
      'desk.body': 'يسأل عملاؤك عن الأسعار وساعات العمل، ويحجزون مواعيدهم ويعدّلونها ويلغونها بالعربية أو الإنجليزية، في أي ساعة. تدخل الحجوزات مباشرة إلى جدول مواعيدك، وكل ما يحتاج إلى شخص يُحوَّل إلى فريقك.',
      'desk.suits': 'يناسب العيادات والصالونات والنوادي الرياضية والمطاعم والمتاجر وأي عمل يستقبل حجوزات.',
      'f1.k': 'اللغات', 'f1.v': 'العربية واللهجة الأردنية والإنجليزية',
      'f2.k': 'يعمل على', 'f2.v': 'واتساب للأعمال (WhatsApp Business)',
      'f3.k': 'الاستضافة', 'f3.v': 'نستضيفه لك، أو استضافة ذاتية للمؤسسات الأكبر',
      'chat.label': 'محادثة توضيحية',
      'chat.langLabel': 'لغة المحادثة',
      'about.title': 'استوديو برمجي، تأسّس في عمّان.',
      'about.body': 'أسّس قمّة لابز آرام الحداد، مهندس برمجيات متكامل (Full-stack) بخبرة تزيد على خمس سنوات في بناء منصات الويب والأنظمة الخلفية وقواعد البيانات التي تعتمد عليها مؤسسات في الأردن كل يوم. لكل مشروع جهة تواصل واحدة من أول مكالمة حتى الإطلاق، وتحديثات واضحة طوال الطريق، ولا مفاجآت في الفاتورة.',
      'about.human': 'قبل البرمجة، درس آرام العزف على البيانو، وما زال يدرّسه. وكلاهما يكافئ العادات نفسها: التمرين والصبر وإتقان التفاصيل.',
      'p.label': 'مبادئنا',
      'p1.t': 'العربية والإنجليزية من البداية', 'p1.b': 'نصمّم باللغتين معاً، ولا نترجم في النهاية.',
      'p2.t': 'سعر ثابت ومكتوب', 'p2.b': 'خطة مكتوبة بالميزات والجدول الزمني والسعر قبل أن يبدأ العمل.',
      'p3.t': 'بياناتك تبقى لك', 'p3.b': 'المشاريع المخصّصة تأتي مع الكود كاملاً، ومع منتجاتنا تبقى بياناتك وحساباتك ورقم واتساب الخاص بك ملكك دائماً.',
      'contact.title': 'أخبرنا ما الذي يبطئ عملك.',
      'contact.body': 'رسالة قصيرة تكفي. عادةً نردّ خلال يوم عمل واحد، والمكالمة الأولى مجانية.',
      'copy': 'نسخ',
      'copied': 'تم النسخ',
      'copied.msg': 'تم نسخ البريد الإلكتروني',
      'whatsapp': 'راسلنا على واتساب',
      'follow': 'تابعنا',
      'foot.left': '© ٢٠٢٦ قمّة لابز، عمّان',
      'foot.right': 'اسمنا «قمّة»، وهي بالإنجليزية Summit.'
    }
  };

  var CHAT = {
    en: {
      day: 'Wednesday',
      m1: 'Hi, can I book on Thursday at 5?', t1: '9:40 PM',
      m2: 'Thursday at 5:00 PM is free. Shall I book it under your name?', t2: '9:40 PM',
      m3: 'Yes please', t3: '9:41 PM',
      m4: 'Booked. I’ll remind you the day before.', t4: '9:41 PM'
    },
    ar: {
      day: 'الأربعاء',
      m1: 'مرحبا، بقدر أحجز يوم الخميس الساعة ٥؟', t1: '٩:٤٠ م',
      m2: 'الخميس الساعة ٥:٠٠ مساءً متاح. هل أؤكد الحجز باسمك؟', t2: '٩:٤٠ م',
      m3: 'أكيد، لو سمحت', t3: '٩:٤١ م',
      m4: 'تم الحجز. سنذكّرك قبل الموعد بيوم.', t4: '٩:٤١ م'
    }
  };

  var root = document.documentElement;
  var lang = window.__qimmaLang === 'ar' ? 'ar' : 'en';

  function $all(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  }

  /* ---------- Example chat ---------- */

  var chatBody = document.querySelector('.chat-body');

  function setChatLang(chatLang) {
    if (!chatBody) return;
    var text = CHAT[chatLang];
    chatBody.lang = chatLang;
    chatBody.dir = chatLang === 'ar' ? 'rtl' : 'ltr';
    $all('[data-chat]').forEach(function (el) {
      var key = el.getAttribute('data-chat');
      if (text[key]) el.textContent = text[key];
    });
    $all('[data-chat-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-chat-lang') === chatLang));
    });
  }

  $all('[data-chat-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setChatLang(btn.getAttribute('data-chat-lang'));
    });
  });

  /* ---------- Page language ---------- */

  var menuButton = document.querySelector('.menu-button');
  var copyLabel = document.querySelector('.copy-label');

  function applyLang(next) {
    lang = next;
    var t = STRINGS[lang];
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    $all('[data-i18n]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });
    $all('[data-i18n-aria]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n-aria')];
      if (value != null) el.setAttribute('aria-label', value);
    });
    $all('[data-i18n-content]').forEach(function (el) {
      var value = t[el.getAttribute('data-i18n-content')];
      if (value != null) el.setAttribute('content', value);
    });

    $all('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });
    var toggle = document.querySelector('[data-toggle-lang]');
    if (toggle) {
      var other = lang === 'ar' ? 'en' : 'ar';
      toggle.lang = other;
      toggle.textContent = other === 'ar' ? 'العربية' : 'English';
    }
    if (menuButton) {
      var open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', t[open ? 'menu.close' : 'menu.open']);
    }

    setChatLang(lang);
    root.classList.remove('i18n-wait');
  }

  function chooseLang(next) {
    try { window.localStorage.setItem('qimma-lang', next); } catch (e) {}
    applyLang(next);
  }

  $all('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      chooseLang(btn.getAttribute('data-set-lang'));
    });
  });
  var langToggle = document.querySelector('[data-toggle-lang]');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      chooseLang(lang === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- Mobile menu ---------- */

  var menu = document.getElementById('mobile-menu');

  function setMenu(open) {
    if (!menu || !menuButton) return;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', STRINGS[lang][open ? 'menu.close' : 'menu.open']);
  }

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menu.hidden) {
        setMenu(false);
        menuButton.focus();
      }
    });
    window.matchMedia('(min-width: 820px)').addEventListener('change', function (event) {
      if (event.matches) setMenu(false);
    });
  }

  /* ---------- Copy email ---------- */

  var copyButton = document.querySelector('[data-copy]');
  var copyStatus = document.getElementById('copy-status');
  var copyTimer;

  function copyFallback(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(area);
    return ok;
  }

  function showCopied() {
    copyLabel.textContent = STRINGS[lang].copied;
    copyStatus.textContent = STRINGS[lang]['copied.msg'];
    clearTimeout(copyTimer);
    copyTimer = setTimeout(function () {
      copyLabel.textContent = STRINGS[lang].copy;
      copyStatus.textContent = '';
    }, 2000);
  }

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      var text = copyButton.getAttribute('data-copy') || EMAIL;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showCopied, function () {
          if (copyFallback(text)) showCopied();
        });
      } else if (copyFallback(text)) {
        showCopied();
      }
    });
  }

  /* English is already in the HTML, so only switch when needed. */
  if (lang === 'ar') {
    applyLang('ar');
  } else {
    root.classList.remove('i18n-wait');
  }
})();
