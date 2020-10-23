/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the page
    */
    open (path) {
        browser.setWindowSize(1920,1080);
        return browser.url(path)
    }
}
