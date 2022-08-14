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

Given("user click on New Project button", () => {
  HomePage.newProject();
});
