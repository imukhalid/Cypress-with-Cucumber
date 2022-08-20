const BasePage = require("../BasePage");

class MyAccount {
  static myAccountPageBody = "div[id='page']";
  static heading = "h1[class='page-heading']";
  static logout = "a[class='logout']";

  static isLoaded() {
    cy.isVisible(this.myAccountPageBody);
  }

  static pageHeading() {
    return cy.get(this.heading);
  }

  static logoutLink() {
    cy.isVisible(this.logout).click();
  }

}

export default MyAccount;
