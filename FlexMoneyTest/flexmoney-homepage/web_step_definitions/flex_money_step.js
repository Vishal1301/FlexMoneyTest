const expect = require('chai').expect;
const {
    I,
    CF,
    flexMoney
} = inject();

var mobileNumber = '9988998899';

Given('User browse to flex money successfully', () => {
    I.login()
    I.wait(5)
});

When('User should see insta staging cred web page and select Kotak Bank', () => {
    flexMoney.verifyInstaCredFormDisplay();
});

Then('User click on continue button', () => {
    I.click('//button[@id=\'continueBtn\']');
});



When('User adds a mobile number and clicks on Submit button and waits for OTP', () => {
    CF.addMobileNumber();
    I.click('//button[@id=\'submitButton\']');
});

Then('User needs to select EMI Tenure with 9 months', () => {
    I.click('//input[@id=\'1001012\']');
    I.wait(2);
    I.click("//button[@id='submitButton']")
});

Then('User needs to verify the account by giving card details', () => {
    flexMoney.verifyTransactionComplete();
});

Then('User needs to add OTP', () => {
    I.wait(5)
    flexMoney.verifyOTP();
});

When('User needs to verify PID,AMT,STATUS is as expected in final invoice', () => {
    flexMoney.verifyPaymentPage();
});

