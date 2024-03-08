Feature: WebdriverUnivercity - Contact Us Page

    Scenario: Valid contact us form submission
        Given I navigate to WebdriverUnivercity homepage
        When I click on contact us button
        And I type first name
        And I type last name
        And I type email address
        And I type a comment
        And I click on submit button
        Then I should be presented with a successful contact us submission message