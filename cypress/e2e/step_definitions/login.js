import LoginPage from "../../pageObjects/pages/LoginPage";
import HomePage from "../../pageObjects/pages/HomePage";
import LandingPage from "../../pageObjects/pages/LandingPage";
import data from "../../fixtures/data.json";
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

When("user click on login page", () => {
  LandingPage.loginLink();
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

Then("user is on Home page", () => {
  HomePage.isLoaded();
});

And("My Home page contains {string} in nav bar", (Projects) => {
  HomePage.projectsManu().should("contain", Projects);
});
