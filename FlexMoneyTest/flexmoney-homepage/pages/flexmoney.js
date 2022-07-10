const { I } = inject();
const {
  expect
} = require('chai');
const { isContext } = require('vm');

module.exports = {

  fields: {
    bankElementField: '//input[@id=\'CI\']',
    dropdownBank: '//select[@id=\'bank_code_fm\']',
    kotakBankSelect: '//tbody/tr[10]/td[2]/select[1]/option[4]',
    cardDetails: '//input[@id=\'accountNo\']',
    submitButton: '//button[@id=\'submitButton\']',
    otpField: '//input[@id=\'otp\']',
    checkBox: '//input[@id=\'instacredTncCheckbox\']',
    piField: '//h3[contains(text(),\'PID : 0001234\')]',
    amtField: '//h3[contains(text(),\'AMT : 10000\')]',
    statusField: '//h3[contains(text(),\'STATUS : SUCCESS\')]',


  },

  verifyInstaCredFormDisplay() {
    I.seeElement(this.fields.bankElementField);
    I.click(this.fields.dropdownBank);
    I.click(this.fields.kotakBankSelect);
  },

  verifyTransactionComplete() {
    I.fillField(this.fields.cardDetails,'1234'),
    I.click(this.fields.submitButton)
  },

  verifyOTP() {
    I.fillField(this.fields.otpField, '777777'),
        I.click(this.fields.checkBox),
        I.click(this.fields.submitButton)
  },

  verifyPaymentPage() {
    I.wait(5)
    I.seeElement(this.fields.piField)
    I.seeElement(this.fields.amtField)
    I.seeElement(this.fields.statusField)
  },
}