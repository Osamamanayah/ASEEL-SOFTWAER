/*
	Arabic / English switch.

	Every translatable node carries a data-i18n key; the strings for both
	languages live in the table below. The chosen language is kept in
	localStorage and re-applied on the next visit.
*/
(function() {

	var STORE = 'aseel-lang';

	var strings = {

		'page.title':  { en: 'Aseel Software',
		                 ar: 'الأصيل للبرمجيات' },

		'logo.main':   { en: 'Aseel',   ar: 'الأصيل' },
		'logo.sub':    { en: 'Software', ar: 'للبرمجيات' },

		'switch':      { en: 'العربية', ar: 'English' },

		/* Intro */

		'hero.h2':     { en: 'Aseel Software',
		                 ar: 'الأصيل للبرمجيات' },
		'hero.tag':    { en: 'vehicula urna sed justo bibendum',
		                 ar: 'نص فرعي توضيحي' },
		'hero.p1':     { en: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.',
		                 ar: 'هذا النص افتراضي وُضع هنا ليعطي فكرة عن شكل الصفحة بعد إضافة المحتوى الحقيقي، ويمكن استبداله في أي وقت بالنص المطلوب. الغرض منه توضيح توزيع الفقرات والمسافات بين العناصر قبل كتابة المحتوى النهائي للموقع.' },
		'hero.p2':     { en: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.',
		                 ar: 'يمكنك استبدال هذه الفقرة بنبذة عن الشركة ومجالات عملها وخبرتها. النص الحالي مجرد نص تجريبي يوضح كيف تظهر الفقرات الطويلة داخل التصميم، وكيف تتوزع الأسطر والمسافات على الشاشات المختلفة.' },
		'hero.cta':    { en: 'Learn More', ar: 'اعرف المزيد' },

		/* Services */

		'sv.h2':       { en: 'Erat lacinia', ar: 'خدماتنا' },
		'sv.tag':      { en: 'vehicula urna sed justo bibendum', ar: 'نص فرعي توضيحي' },
		'sv.1h':       { en: 'Portitor ullamcorper', ar: 'خدمة توضيحية (١)' },
		'sv.2h':       { en: 'Sapien veroeros',      ar: 'خدمة توضيحية (٢)' },
		'sv.3h':       { en: 'Quam lorem ipsum',     ar: 'خدمة توضيحية (٣)' },
		'sv.4h':       { en: 'Sed magna finibus',    ar: 'خدمة توضيحية (٤)' },
		'sv.p':        { en: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
		                 ar: 'نص تجريبي يوضح وصف الخدمة. استبدله بشرح مختصر لما تقدمه الشركة في هذا المجال وما يميزه عن غيره.' },

		/* Work */

		'wk.h2':       { en: 'Ipsum sed dolor', ar: 'أعمالنا' },
		'wk.tag':      { en: 'vehicula urna sed justo bibendum', ar: 'نص فرعي توضيحي' },
		'wk.1h':       { en: 'Interdum aenean',      ar: 'مشروع توضيحي (١)' },
		'wk.2h':       { en: 'Nulla amet dolore',    ar: 'مشروع توضيحي (٢)' },
		'wk.3h':       { en: 'Tempus ullamcorper',   ar: 'مشروع توضيحي (٣)' },
		'wk.4h':       { en: 'Sed etiam facilis',    ar: 'مشروع توضيحي (٤)' },
		'wk.5h':       { en: 'Feugiat lorem aenean', ar: 'مشروع توضيحي (٥)' },
		'wk.6h':       { en: 'Amet varius aliquam',  ar: 'مشروع توضيحي (٦)' },
		'wk.p':        { en: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
		                 ar: 'نص تجريبي مكان وصف المشروع. اكتب هنا نبذة قصيرة عن العميل والمشكلة التي عالجها المشروع والنتيجة التي تحققت.' },

		/* Highlights */

		'hl.1h':       { en: 'Ante interdum',        ar: 'عنوان توضيحي (١)' },
		'hl.1p':       { en: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Etiam tristique libero eu nibh porttitor fermentum.',
		                 ar: 'نص تجريبي مرافق للصورة. يصلح لعرض ميزة أو مرحلة من مراحل العمل مع صورة توضيحية إلى جانبها.' },
		'hl.2h':       { en: 'Interdum sed dapibus', ar: 'عنوان توضيحي (٢)' },
		'hl.2p':       { en: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non.',
		                 ar: 'نص تجريبي مرافق للصورة. لاحظ أن الصورة تنتقل إلى الجهة المقابلة تلقائياً عند تغيير اللغة إلى العربية.' },
		'hl.3h':       { en: 'Magna etiam veroeros', ar: 'عنوان توضيحي (٣)' },
		'hl.3p':       { en: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit.',
		                 ar: 'نص تجريبي مرافق للصورة. استبدله بما تريد إبرازه للزائر، مثل طريقة العمل أو ضمان الجودة أو الدعم بعد التسليم.' },

		/* Contact */

		'ct.h2':       { en: 'Get in touch', ar: 'تواصل معنا' },
		'ct.tag':      { en: 'vehicula urna sed justo bibendum', ar: 'نص فرعي توضيحي' },
		'ct.p':        { en: 'Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
		                 ar: 'يسعدنا تواصلك معنا. اكتب رسالتك في النموذج أدناه وسنرد عليك في أقرب وقت، أو استخدم بيانات الاتصال المرفقة.' },
		'ct.name':     { en: 'Name',         ar: 'الاسم' },
		'ct.email':    { en: 'Email',        ar: 'البريد الإلكتروني' },
		'ct.subject':  { en: 'Subject',      ar: 'الموضوع' },
		'ct.message':  { en: 'Enter your message', ar: 'اكتب رسالتك' },
		'ct.send':     { en: 'Send Message', ar: 'إرسال الرسالة' },
		'ct.reset':    { en: 'Reset',        ar: 'مسح' },
		'ct.address':  { en: '1234 Somewhere Road #8254, Nashville, TN 00000-0000',
		                 ar: '١٢٣٤ طريق سَمواير رقم ٨٢٥٤، ناشفيل، تينيسي ٠٠٠٠٠-٠٠٠٠' },

		/* Footer */

		'ft.copy':     { en: '© Aseel Software. All rights reserved.',
		                 ar: '© الأصيل للبرمجيات. جميع الحقوق محفوظة.' }

	};

	function each(selector, fn) {
		var nodes = document.querySelectorAll(selector), i;
		for (i = 0; i < nodes.length; i++)
			fn(nodes[i]);
	}

	function text(key, lang) {
		var entry = strings[key];
		return entry ? entry[lang] : null;
	}

	function apply(lang) {

		var root = document.documentElement,
			logo = document.querySelector('#header .logo a'),
			button = document.getElementById('lang-toggle');

		root.setAttribute('lang', lang);
		root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

		document.title = text('page.title', lang);

		each('[data-i18n]', function(el) {
			var value = text(el.getAttribute('data-i18n'), lang);
			if (value !== null)
				el.textContent = value;
		});

		each('[data-i18n-placeholder]', function(el) {
			var value = text(el.getAttribute('data-i18n-placeholder'), lang);
			if (value !== null)
				el.placeholder = value;
		});

		each('[data-i18n-value]', function(el) {
			var value = text(el.getAttribute('data-i18n-value'), lang);
			if (value !== null)
				el.value = value;
		});

		/* the logo is a bare text node plus a span, so it is set by hand */
		if (logo) {
			logo.firstChild.nodeValue = text('logo.main', lang) + ' ';
			logo.querySelector('span').textContent = text('logo.sub', lang);
		}

		if (button) {
			button.textContent = text('switch', lang);
			button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
		}

		try {
			window.localStorage.setItem(STORE, lang);
		}
		catch (e) {}

	}

	function preferred() {

		var stored = null;

		try {
			stored = window.localStorage.getItem(STORE);
		}
		catch (e) {}

		if (stored === 'ar' || stored === 'en')
			return stored;

		return (navigator.language || '').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';

	}

	document.addEventListener('DOMContentLoaded', function() {

		var button = document.getElementById('lang-toggle');

		apply(preferred());

		if (button)
			button.addEventListener('click', function() {
				apply(document.documentElement.getAttribute('dir') === 'rtl' ? 'en' : 'ar');
			});

	});

})();
