const path = require('path');
const { config } = require('./wdio.shared.conf');


  // runner: 'local',
  // path: '/wd/hub',
  
config.port = 4723;
config.specs = [
  // ToDo: define location for spec files here
  '.././test/specs/android/my-growth*.js'
];
config.capabilities = [{
  'appium:platformName': 'Android',
  'appium:platformVersion': '6.0',
  'appium:deviceName': 'Pixel A6',
  'appium:automationName': 'UIAutomator2',
  //'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
  'appium:app': path.join(process.cwd(), 'app/android/OpenDeviceLab2.apk'),
  'appium:autoGrantPermissions': true
}];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services= ['appium'];

exports.config = config;