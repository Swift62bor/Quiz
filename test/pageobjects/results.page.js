const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a results page
 */
class ResultsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get flightList () { return $('.flight-list') }
    get firstSearchResultSelectButton () { return $('.//*[@class="flight"][1]//button[text() = "Select"]') }

    /**
     * a method to verify that Results page opens and elements are displayed
     */
    isDisplayed () {
        expect (this.flightList).toBeExisting();
    }

    /**
     * a method to selecting the 1st search results in list
     */
    selectResult () {
        this.firstSearchResultSelectButton.click(); 
    }
}

module.exports = new ResultsPage();