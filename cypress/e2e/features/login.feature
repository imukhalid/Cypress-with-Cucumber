Feature: Login and Logout

    Scenario: Login with a valid account

        Given user accesses Landing Page
        When user click on login link
        And user logs in with valid email "favok92246@yasiok.com" and valid password "admin1234"
        Then user is on my account page
        And My Home page contains MY ACCOUNT as heading
    
    Scenario: Login and Logout with a valid account

        Given user accesses Landing Page
        When user click on login link
        And user logs in with valid email "favok92246@yasiok.com" and valid password "admin1234"
        When user Logout
        Then user is on Landing Page
