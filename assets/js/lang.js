/*
	Arabic / English switch.

	Every translatable node carries a data-i18n key; the strings for both
	languages live in the table below. The chosen language is kept in
	localStorage and re-applied on the next visit.
*/
(function() {

	var STORE = 'aseel-lang';

	var strings = {

		'page.title':  { en: 'Aseel Software — web and mobile development',
		                 ar: 'الأصيل للبرمجيات — تطوير المواقع والتطبيقات' },

		'logo.main':   { en: 'Aseel',    ar: 'الأصيل' },
		'logo.sub':    { en: 'Software', ar: 'للبرمجيات' },

		'switch':      { en: 'العربية', ar: 'English' },

		/* Intro */

		'hero.h2':     { en: 'Aseel Software',
		                 ar: 'الأصيل للبرمجيات' },
		'hero.tag':    { en: 'software · websites · mobile apps',
		                 ar: 'برمجيات · مواقع · تطبيقات' },
		'hero.p1':     { en: 'We build websites and mobile applications, and the software that runs behind them. From the first sketch of a screen through to the servers it runs on, we handle the whole build so you have one team to talk to.',
		                 ar: 'نبني المواقع الإلكترونية وتطبيقات الجوال والأنظمة البرمجية التي تعمل خلفها. نتولى العمل من أول رسم للواجهة حتى تشغيله على الخوادم، فيكون أمامك فريق واحد تتعامل معه.' },
		'hero.p2':     { en: 'Every project starts with the problem, not the technology. We map out what the work actually needs to do, agree the scope with you in writing, then build it in short stages you can see and try as they land — so nothing is a surprise at delivery.',
		                 ar: 'نبدأ كل مشروع من المشكلة لا من التقنية. نحدد ما يجب أن يفعله العمل فعلاً، ونتفق معك على النطاق كتابةً، ثم ننفذه على مراحل قصيرة تراها وتجربها أولاً بأول — فلا تكون هناك مفاجآت عند التسليم.' },
		'hero.cta':    { en: 'What we do', ar: 'ما نقدّمه' },

		/* Services */

		'sv.h2':       { en: 'What we do', ar: 'ما نقدّمه' },
		'sv.tag':      { en: 'four things, done properly', ar: 'أربع خدمات نتقنها' },

		'sv.1h':       { en: 'Websites', ar: 'تطوير المواقع' },
		'sv.1p':       { en: 'Company sites, online stores and web platforms — built to load fast, read well on a phone, and be found by search engines. You get a control panel to edit the content yourself, no developer needed.',
		                 ar: 'مواقع الشركات والمتاجر الإلكترونية والمنصات — نبنيها سريعة التحميل، واضحة على شاشة الجوال، ومهيأة لمحركات البحث. ونسلّمك لوحة تحكم تعدّل بها المحتوى بنفسك دون الحاجة إلى مبرمج.' },

		'sv.2h':       { en: 'Mobile apps', ar: 'تطبيقات الجوال' },
		'sv.2p':       { en: 'Applications for iOS and Android from one codebase, so both platforms stay in step and cost less to maintain. We take care of store submission and the updates that follow.',
		                 ar: 'تطبيقات لنظامي iOS و Android من شيفرة واحدة، فيبقى النظامان متطابقين وتقل كلفة الصيانة. ونتولى نشر التطبيق في المتاجر ومتابعة تحديثاته.' },

		'sv.3h':       { en: 'Custom software', ar: 'برمجيات مخصصة' },
		'sv.3p':       { en: 'Internal systems shaped around how your organisation actually works — inventory, billing, bookings, reporting. Built to connect to the tools you already run rather than replace them.',
		                 ar: 'أنظمة داخلية مفصّلة على طريقة عمل مؤسستك فعلاً — المخزون والفوترة والحجوزات والتقارير. نبنيها لتتصل بالأدوات التي تستخدمها بالفعل بدل أن تستبدلها.' },

		'sv.4h':       { en: 'Support and hosting', ar: 'الدعم والاستضافة' },
		'sv.4p':       { en: 'The part that starts after launch: hosting, backups, security updates and monitoring, with a named contact who answers. Handovers to your own team are documented, not verbal.',
		                 ar: 'ما يبدأ بعد الإطلاق: الاستضافة والنسخ الاحتياطي والتحديثات الأمنية والمراقبة، مع جهة اتصال محددة تردّ عليك. وإن أردت تسليم العمل لفريقك فالتسليم موثّق لا شفهي.' },

		/* Work */

		'wk.h2':       { en: 'The kind of work we take on', ar: 'نوعية الأعمال التي ننفذها' },
		'wk.tag':      { en: 'from a landing page to a full platform', ar: 'من صفحة واحدة إلى منصة متكاملة' },

		'wk.1h':       { en: 'Company websites', ar: 'مواقع الشركات' },
		'wk.1p':       { en: 'A site that explains what a business does and brings in enquiries — clear structure, fast pages, and content the client can edit without calling us.',
		                 ar: 'موقع يشرح عمل الشركة ويجلب لها طلبات العملاء — بنية واضحة وصفحات سريعة ومحتوى يعدّله العميل دون الرجوع إلينا.' },

		'wk.2h':       { en: 'Mobile applications', ar: 'تطبيقات الجوال' },
		'wk.2p':       { en: 'Apps for customers or for staff in the field: we start from the screens, agree them with you before a line of code, then build against that.',
		                 ar: 'تطبيقات للعملاء أو لموظفي الميدان: نبدأ من تصميم الشاشات ونتفق عليها معك قبل كتابة سطر واحد من الشيفرة، ثم ننفذ على أساسها.' },

		'wk.3h':       { en: 'Online stores', ar: 'المتاجر الإلكترونية' },
		'wk.3p':       { en: 'Product catalogue, cart, local payment gateways and delivery, joined up with whatever you use to track stock so the numbers stay in one place.',
		                 ar: 'عرض المنتجات وسلة الشراء وبوابات الدفع المحلية والشحن، موصولة بنظام المخزون لديك حتى تبقى الأرقام في مكان واحد.' },

		'wk.4h':       { en: 'System integration', ar: 'تكامل الأنظمة' },
		'wk.4p':       { en: 'Getting separate systems to talk: accounting, CRM, government portals, payment providers. Usually the cheapest fix, because nothing has to be replaced.',
		                 ar: 'ربط الأنظمة المنفصلة ببعضها: المحاسبة وإدارة العملاء والبوابات الحكومية ومزودي الدفع. وغالباً يكون هذا أقل الحلول كلفة لأنه لا يستبدل شيئاً.' },

		'wk.5h':       { en: 'Databases and reporting', ar: 'قواعد البيانات والتقارير' },
		'wk.5p':       { en: 'Designing where the data lives and how it is read back — dashboards and reports that answer the questions management actually asks.',
		                 ar: 'تصميم مكان حفظ البيانات وطريقة قراءتها — لوحات ومؤشرات وتقارير تجيب عن الأسئلة التي تطرحها الإدارة فعلاً.' },

		'wk.6h':       { en: 'Deployment and cloud', ar: 'النشر والاستضافة السحابية' },
		'wk.6p':       { en: 'Moving a project onto servers that can carry it, with automated deployment so a fix reaches users the same day it is written.',
		                 ar: 'نقل المشروع إلى خوادم تتحمله، مع نشر آلي يوصل الإصلاح إلى المستخدمين في اليوم نفسه الذي يُكتب فيه.' },

		/* Highlights */

		'hl.1h':       { en: 'Code your next developer can read',
		                 ar: 'شيفرة يفهمها المبرمج القادم' },
		'hl.1p':       { en: 'A project outlives the team that wrote it. We keep the code plain and documented, and you own the repository from day one — so if you ever move the work elsewhere, it moves cleanly.',
		                 ar: 'المشروع يبقى بعد الفريق الذي كتبه. نُبقي الشيفرة واضحة وموثّقة، ومستودع الشيفرة ملكك من اليوم الأول — فإن نقلت العمل إلى جهة أخرى يوماً، انتقل نظيفاً.' },

		'hl.2h':       { en: 'Fits the systems you already run',
		                 ar: 'يتكامل مع أنظمتك الحالية' },
		'hl.2p':       { en: 'Most organisations do not need a new system so much as their existing ones joined together. We connect to accounting software, payment gateways and government portals through their published interfaces.',
		                 ar: 'أكثر المؤسسات لا تحتاج نظاماً جديداً بقدر ما تحتاج ربط أنظمتها القائمة. نتصل ببرامج المحاسبة وبوابات الدفع والبوابات الحكومية عبر واجهاتها المعتمدة.' },

		'hl.3h':       { en: 'Built for the phone first',
		                 ar: 'مبني للجوال أولاً' },
		'hl.3p':       { en: 'Most of your visitors arrive on a phone, so that is the screen we design for first and test on real devices — not just a browser window made narrow.',
		                 ar: 'أغلب زوارك يصلون من الجوال، فهي الشاشة التي نصمم لها أولاً ونختبر عليها بأجهزة حقيقية — لا بنافذة متصفح مصغّرة فحسب.' },

		/* Contact */

		'ct.h2':       { en: 'Get in touch', ar: 'تواصل معنا' },
		'ct.tag':      { en: 'tell us what you need built', ar: 'أخبرنا بما تريد بناءه' },
		'ct.p':        { en: 'Send us a short description of the project and what you want it to do. We will come back with the questions we need answered, a rough timeline and a price — before you commit to anything.',
		                 ar: 'أرسل لنا وصفاً مختصراً للمشروع وما تريده أن يفعل، وسنعود إليك بالأسئلة التي نحتاج إجابتها ومدة تقديرية وسعر — قبل أن تلتزم بشيء.' },
		'ct.name':     { en: 'Name',         ar: 'الاسم' },
		'ct.email':    { en: 'Email',        ar: 'البريد الإلكتروني' },
		'ct.subject':  { en: 'Subject',      ar: 'الموضوع' },
		'ct.message':  { en: 'Describe the project briefly', ar: 'اشرح مشروعك باختصار' },
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
