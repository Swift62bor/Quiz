const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a login page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[name=email]') }
    get inputPassword () { return $('[name=password]') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to verify that Login page opens and elements are displayed
     */
    isDisplayed () {
        expect (this.inputUsername).toBeExisting();
        expect (this.inputPassword).toBeExisting();
        expect (this.btnSubmit).toBeExisting();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }
}

module.exports = new LoginPage();
