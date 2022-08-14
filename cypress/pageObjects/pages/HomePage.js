const BasePage = require("../BasePage");

class HomePage {
  static homePage = "#designer-projects";
  static projects = ".main-nav__link[href='/projects']";
  static newProjectBtn = ".header-controls > .h-p-button";

  static isLoaded() {
    cy.isVisible(this.homePage);
  }

  static projectsManu() {
    return cy.isVisible(this.projects);
  }

  static newProject() {
    cy.isVisible(this.newProjectBtn).click({ force: true });
  }
}

export default HomePage;
