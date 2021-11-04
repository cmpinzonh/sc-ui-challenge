import { Config } from 'protractor';
import { reporter } from './helpers/reporter';

var HtmlReporter = require('protractor-beautiful-reporter');

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();

    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports'
   }).getJasmine2Reporter());
  }
};
