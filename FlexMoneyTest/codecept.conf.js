// Load the libraries we need for path/filesystem manipulation
const path = require('path')
const fs = require('fs')

exports.config = {
  plugins: {
    allure: {
      "enabled": true,
      screenshotOnFail: {
        enabled: true,
        fullPageScreenshots: true,
      },
      screenshotsForAllureReport: {
        enabled: true
      },
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },

  },
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://staging.instacred.me/simulation/tpsl/e2e-transaction.jsp',
      browser: 'chrome',
      smartWait: 15000,
      windowSize: "maximize",
      path: '/',
      restart: false,
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
        }
      }
    }
    },
  MyHelper: {
    require: './helpers/myhelper_helper.js',
  },

  include: {
    I: './steps_file.js',
    flexMoney: './flexmoney-homepage/pages/flexmoney.js',
    CF: './commonFunctions.js'
  },
  gherkin: {
    features: './*/web_features/*.feature',
    steps: './*/web_step_definitions/*.js'
  },
  bootstrap: null,
  mocha: {},
  tests: './step_definitions/*_Page.js',
  name: 'FlexMoney Test'
}