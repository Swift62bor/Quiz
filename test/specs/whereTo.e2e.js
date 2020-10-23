const LoginPage = require('../pageobjects/login.page');
const MainPage = require('../pageobjects/main.page');
const ResultsPage = require('../pageobjects/results.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('My WhereTo application', () => {

    beforeEach(() => {
        browser.setWindowSize(1920,1280);
    })
    it('should login with valid credentials', () => {
        browser.url('http://qa-48.w2.ae/');
        LoginPage.isDisplayed();

        LoginPage.login('test@test.com', 'Qwer.123');
        expect(MainPage.flightRailMenuElement).toBeExisting();
    });

    it('should search for one-way flight for future dates', () => {
        browser.url('http://qa-48.w2.ae/');
        MainPage.isDisplayed();

        MainPage.selectTransport("Flight");
        expect(MainPage.transportDropdown).toHaveText("FLIGHT ONLY"); 
        MainPage.selectWay("One Way");
        expect(MainPage.waysDropdown).toHaveText("ONE-WAY");
        MainPage.setDestination("London");
        MainPage.setDeparturePoint("Moscow");
        MainPage.setNextMonthDate();
        MainPage.makeSearch();
        ResultsPage.isDisplayed();
    })

    it('should select search result and open checkout page', () => {
        browser.url('http://qa-48.w2.ae/trip');
        ResultsPage.isDisplayed();

        ResultsPage.selectResult();
        CheckoutPage.isDisplayed();
    } )
});


