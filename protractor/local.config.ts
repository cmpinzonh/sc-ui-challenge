import { Config } from 'protractor';
import { reporter } from './helpers/reporter';

const { AwesomeReport } = require('jasmine-awesome-report');

const awesomeConfig = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true
};

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    reporter()
    jasmine.getEnv().addReporter(AwesomeReport.getReport(awesomeConfig));
  }
};
