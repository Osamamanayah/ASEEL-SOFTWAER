/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)

	Rewritten without jQuery. The template shipped jQuery 1.11.3, poptrox and
	skel to drive a gallery lightbox, a breakpoint grid and this fade; the
	page uses none of the first two any more, and the fade is four lines.
*/
(function() {

	document.body.classList.add('is-loading');

	window.addEventListener('load', function() {
		window.setTimeout(function() {
			document.body.classList.remove('is-loading');
		}, 100);
	});

})();

/*
	Register the service worker so the site can be installed to a home screen
	and opened offline. Service workers only run over https (or localhost), so
	this quietly does nothing when the page is opened straight off disk.
*/
if ('serviceWorker' in navigator && location.protocol === 'https:') {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('sw.js').catch(function() {});
	});
}
