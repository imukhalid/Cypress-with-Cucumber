const BasePage = require("../BasePage");

class LandingPage {
  static landingPage = "#home";
  static login = ".main-nav__link--sign-in";

  static load() {
    cy.visit("http://s.designfiles.co");
  }

  static isLoaded() {
    cy.isVisible(this.landingPage);
  }

  static loginLink() {
    cy.isVisible(this.login).click();
  }
}

export default LandingPage;
