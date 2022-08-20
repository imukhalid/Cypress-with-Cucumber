import LoginPage from "../../pageObjects/pages/LoginPage";
import MyAccount from "../../pageObjects/pages/MyAccount";
import LandingPage from "../../pageObjects/pages/LandingPage";
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("user accesses Landing Page", () => {
  LandingPage.load();
  LandingPage.isLoaded();
});

When("user click on login link", () => {
  LandingPage.signinLink();
  LoginPage.isLoaded();
});

And(
  "user logs in with valid email {string} and valid password {string}",
  (user_email, user_password) => {
    LoginPage.userEmail(user_email).should("have.value", user_email);
    LoginPage.password(user_password).should("have.value", user_password);
    LoginPage.submit();
  }
);

Then("user is on my account page", () => {
  MyAccount.isLoaded();
});

And("My Home page contains MY ACCOUNT as heading", () => {
  MyAccount.pageHeading().should("contain", 'My account');
});

When("user Logout", () => {
  MyAccount.logoutLink();
});

Then("user is on Landing Page", () => {
  LandingPage.isLoaded().url().should('include', 'http://automationpractice.com/index.php');
});
