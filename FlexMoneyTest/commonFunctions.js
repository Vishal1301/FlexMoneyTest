// in this file you can append custom step methods to 'I' object
//const { apiEngine } = inject();
const Helper = codeceptjs.helper;
const queryString = require('querystring'); 
const expect = require('chai').expect;
var mobileNumber = '9988998899';
module.exports = function () {
 

  return actor({

    fields: {
      mobileNumberField : '//input[@id=\'paymentEnterMobile\']',
    },

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
   

    //The function will click the control panel, monitoring and sandbox element. Provide the path in the paramter
    addMobileNumber() {
      this.seeElement('//input[@id=\'paymentEnterMobile\']'),
      this.seeElement('//div[contains(text(),\'You will get an OTP on this number\')]')
      this.fillField('//input[@id=\'paymentEnterMobile\']',mobileNumber);
    },

  });
}