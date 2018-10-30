Feature: Place a bet

    As a user
    I want to place a bet
    

    Background:

        Given I am on the home page

    Scenario Outline: 
        When I navigate to Premier league page
        And I place a <amount> bet for any first team to Win at home        
        Then I should see proper return amount
        And I should see <amount> total stake amount

        Examples:
        |amount| 
        |0.05| 