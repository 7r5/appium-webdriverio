const path = require('path');
const { config } = require('./wdio.shared.conf');


config.port = 4724;
config.specs = [
  // ToDo: define location for spec files here
  './test/specs/ios/*.js'
];
config.capabilities = [{
  'appium:platformName': 'iOS',
  'appium:platformVersion': '11.1',
  'appium:deviceName': 'iPhone 10 Plus',
  'appium:automationName': 'XCUITest',
  'appium:app': path.join(process.cwd(), 'app/ios/ThisIsAnIosApp.ipa'),
}];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services= ['appium'];
exports.config = config;
