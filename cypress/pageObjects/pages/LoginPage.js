import BasePage from "../BasePage";

class LoginPage {
  static loginPageBody = "div[id='page']";
  static heading = "h3[class='page-subheading']";
  static user_email = "input[id='email']";
  static user_password = "input[id='passwd']";
  static loginBtn = "button[id='SubmitLogin']";

  static isLoaded() {
    cy.isVisible(this.loginPageBody);
    cy.isVisible(this.user_email);
    cy.isVisible(this.user_password);
    cy.isVisible(this.loginBtn);
  }

  static loginHeading() {
    return cy.get(this.heading);
  }

  static userEmail(email) {
    return cy.get(this.user_email).type(email);
  }

  static password(password) {
    return cy.get(this.user_password).type(password);
  }

  static submit() {
    return cy.get(this.loginBtn).click();
  }
}

export default LoginPage;
