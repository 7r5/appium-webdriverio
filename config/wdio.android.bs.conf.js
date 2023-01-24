require('dotenv').config();
const { config } = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;


config.specs = [
  // ToDo: define location for spec files here
  '.././test/specs/android/*.js'
];
config.capabilities = [{
    'project': "First Webdriverio Android Project",
    'build': "browserstack-build-1",
    'name': "local_test",
    'device': "Google Pixel 3",
    'os_version': "9.0",
    'app': 'bs://887e51a8c58b4eb7de614e17f811b36e5aa39409',
    'browserstack.local': false,
    'autoGrantPermissions': true
  }],
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services= ['browserstack'];
exports.config = config;