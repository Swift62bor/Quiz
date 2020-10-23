const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a Checkout page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pageName () { return $('.//*[contains(@class, "CheckoutScreenHeader")]') }
    get checkoutContent () { return $('.//*[contains(@class, "CheckoutMainContent")]') }

    /**
     * a method to verify that Checkout page opens and elements are displayed
     */
    isDisplayed () {
        expect (this.pageName).toBeExisting();
        expect (this.pageName).toHaveText("Checkout");
        expect (this.checkoutContent).toBeExisting();
    }
}

module.exports = new CheckoutPage();