import BasePage from "../BasePage";

class LoginPage {
  static loginHeading = "h1.auth-box__header-text";
  static user_email = "input[id='user_email']";
  static user_password = "input[id='user_password']";
  static login = "button[type='submit']";

  static isLoaded() {
    cy.isVisible(this.loginHeading);
    cy.isVisible(this.user_email);
    cy.isVisible(this.user_password);
    cy.isVisible(this.login);
  }

  static userEmail(email) {
    return cy.get(this.user_email).type(email);
  }

  static password(password) {
    return cy.get(this.user_password).type(password);
  }

  static submit() {
    return cy.get(this.login).click();
  }
}

export default LoginPage;
