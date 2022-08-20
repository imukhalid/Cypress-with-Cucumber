const BasePage = require("../BasePage");

class LandingPage {
  static landingPageBody = "div[id='page']";
  static signin = "a[class='login']";

  static load() {
    cy.visit("http://automationpractice.com/index.php");
  }

  static isLoaded() {
    return cy.isVisible(this.landingPageBody);
  }

  static signinLink() {
    cy.isVisible(this.signin).click();
  }
}

export default LandingPage;
