
export default class Page {

	get loadOverlay () { browser.element('//div[@id="wh-preloader"]')}

	open (path) {
		browser.windowHandleFullscreen();
		browser.url(path)
	}
}
