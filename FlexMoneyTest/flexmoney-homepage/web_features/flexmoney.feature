Feature: Flex Money
    In order to check Flexmoney’s
    transaction authorization flow that is deployed
    across 1500+ merchants and 5 lenders

    Scenario: Navigate to FlexMoney website
        Given User browse to flex money successfully
        When User should see insta staging cred web page and select Kotak Bank
        Then User click on continue button

    Scenario: Complete the transaction by valid card details and OTP
        When User adds a mobile number and clicks on Submit button and waits for OTP
        Then User needs to select EMI Tenure with 9 months
        And User needs to verify the account by giving card details
        And User needs to add OTP

    Scenario: Verify Successful Transaction Payment Page
        Then User needs to verify PID,AMT,STATUS is as expected in final invoice

