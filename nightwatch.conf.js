const path = require('path');

var SELENIUM_CONFIG = {
    launch_url: 'https://orange.fr',
    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80
};

var CHROME_CONFIG = {
    'browserstack.user': 'benniboom1',
    'browserstack.key': 'bLiDLvx6cm4AHTfSYst4',
    'browser': 'chrome',
    'name': 'Bstack-[Nightwatch] Sample Test'
};

var DEFAULT_CONFIG = {
    launch_url: 'https://orange.fr',
    desiredCapabilities: CHROME_CONFIG
};

var REC_CONFIG = Object.assign({}, DEFAULT_CONFIG, {
    launch_url: 'https://rec.orange.fr'
  });

var ENVIRONMENTS = {
    default: DEFAULT_CONFIG,
    rec: REC_CONFIG
};

nightwatch_config = {
    src_folders: ['tests'],
    page_objects_path: 'pages',
    webdriver: SELENIUM_CONFIG,
    test_settings: ENVIRONMENTS,
    custom_commands_path: [
        'node_modules/nightwatch-vrt/commands'
    ],
    custom_assertions_path: [
        'node_modules/nightwatch-vrt/assertions'
    ]
}

function generateScreenshotFilePath(nightwatchClient, basePath, fileName) {
    const moduleName = nightwatchClient.currentTest.module,
        testName = nightwatchClient.currentTest.name;

    return path.join(process.cwd(), basePath, moduleName, testName, fileName);
}

nightwatch_config.test_settings.default.globals = {
    'visual_regression_settings': {
        'generate_screenshot_path': generateScreenshotFilePath,
        'latest_screenshots_path': 'vrt/latest',
        'latest_suffix': '',
        'baseline_screenshots_path': 'vrt/baseline',
        'baseline_suffix': '',
        'diff_screenshots_path': 'vrt/diff',
        'diff_suffix': '',
        'threshold': 0,
        'prompt': false,
        'always_save_diff_screenshot': process.env.CONSOLIDATE == 1
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.webdriver.host;
    config['selenium_port'] = nightwatch_config.webdriver.port;
}

module.exports = nightwatch_config;