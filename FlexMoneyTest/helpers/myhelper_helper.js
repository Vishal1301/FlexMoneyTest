//const Helper = codeceptjs.helper;
const Helper = require('@codeceptjs/helper');


class MyHelper extends Helper {

  async _passed() {
    const allure = codeceptjs.container.plugins('allure');
    const imgBytes = await this.helpers['WebDriver'].browser.takeScreenshot();
    allure.addAttachment('screenshot', Buffer.from(imgBytes, 'base64'), 'image/png');
  };

  
}

module.exports = MyHelper;



