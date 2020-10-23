const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a Main page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */

    get navigationBar () {return $('#wfNavbar')}
    get userButton () { return $('.//button[contains(@class, "DropdownName")]') }

    get flightRailMenuElement () { return $('.//div[text()="Flight/Rail"]') }
    get hotelMenuElement () { return $('.//div[text()="Hotel"]') }
    get carMenuElement () { return $('.//div[text()="Car"]') }

    get transportDropdown () { return $('(.//*[@class = "Select-value"])[1]') }
    get flightOnlyOption () { return $('[aria-activedescendant=react-select-2--option-0]') }
    get flightAndRailOption () { return $('[aria-activedescendant=react-select-2--option-1]') }
    get railOnlyOption () { return $('[aria-activedescendant=react-select-2--option-2]') }

    get waysDropdown () { return $('(.//*[@class = "Select-value"])[3]') }
    get roundTripOption () { return $('[aria-activedescendant=react-select-4--option-0]') }
    get oneWayOption () { return $('[aria-activedescendant=react-select-4--option-1]') }
    get multiCityOption () { return $('[aria-activedescendant=react-select-4--option-2]') }

    get whereInput () { return $('.//input[contains(@placeholder, "Enter your exact meeting address")]') }
    get whereFromInput () { return $('.//input[contains(@placeholder, "Business Name, Address, City")]') }

    get whenInput () { return $('.react-datepicker-wrapper input') }
    get nextMonthArrowSelector () { return $('.//button[contains(@class, "datepicker__navigation--next")]') }
    get tenthDaySelector () {return $(`[aria-label=day-10]`)}

    get searchButton () { return $('.//button[@type="submit"][text()="Search"]') }


    /**
     * a method to verify that Main page opens and elements are displayed
     */
    isDisplayed () {
        expect (this.navigationBar).toBeExisting();
        expect (this.userButton).toBeExisting();
        expect (this.userButton).toHaveText("Hey, Neha")
        expect (this.whereInput).toBeExisting();
        expect (this.searchButton).toBeExisting();
        expect (this.transportDropdown).toBeExisting();
    }

    /**
     * 
     * @param {*} type  
     * method to select a type of transport
     */
    selectTransport (type) {
        this.transportDropdown.click();
        switch (type) {
            case "Flight":
                this.flightOnlyOption.click();
                break;
            case "Any":
                this.flightAndRailOption.click();
                break;
            case "Rail":
                this.railOnlyOption.click();
        }
    }

    /**
     * 
     * @param {*} wayType 
     * a method to set way option
     */
    selectWay (wayType) {
        this.waysDropdown.click();
        switch (wayType) {
            case "Round Trip":
                this.roundTripOption.click();
                break;
            case "One Way":
                /**
                 * Here I send `Arrow down` and `Enter` keys to select the correct statement
                 */
                browser.keys("\uE015");
                browser.keys("\uE007");
                break;
            case "Multi-City":
                this.multiCityOption.click();
        }
    }

    setDestination (destination) {
        this.whereInput.setValue(destination);
        //Setting waiting for script to load matches
        browser.pause(1000);
        browser.keys("\uE007");
    }

    setDeparturePoint (departure) {
        this.whereFromInput.setValue(departure);
        //Setting waiting for script to load matches
        browser.pause(1000);
        browser.keys("\uE007");
    }

    setNextMonthDate () { 
        this.whenInput.click();
        this.nextMonthArrowSelector.click();
        this.tenthDaySelector.click();
    }

    makeSearch () {
        this.searchButton.click();
    }
}

module.exports = new MainPage();
