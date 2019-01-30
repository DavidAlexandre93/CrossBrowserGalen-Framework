
this.WelcomePage = $page("Welcome page", {
    loginButton: " .button-login"
});

this.LoginPage = $page("Login page", {
    username: "input[name='login.username']",
    password: "input[name='login.password']",
    loginButton: " .button-login"
    
});

/*function wait () {
    //this.open("http://example.com/login");
    return this.waitForIt();
}*/


var welcomePage = new WelcomePage(driver);
//welcomePage.loginButton.waitToBeShown("30s");
welcomePage.loginButton.click();

var loginPage = new LoginPage(driver);
loginPage.waitForIt();


loginPage.username.typeText("testuser@example.com");
loginPage.password.typeText("test123");
//loginPage.loginButton.waitToBeShown("30s");
loginPage.loginButton.click();
