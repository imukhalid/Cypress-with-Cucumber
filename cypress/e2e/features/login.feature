Feature: Login page

    Background: Login with a valid account

        Given user accesses Landing Page
        When user click on login page
        And user logs in with valid email "01qa@df.co" and valid password "Admin@123"
        Then user is on Home page
        And My Home page contains "Projects" in nav bar

    Scenario: Starter user should be able to create only one project at a time

        Given user click on New Project button