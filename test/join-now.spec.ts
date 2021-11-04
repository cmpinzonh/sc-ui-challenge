import { browser } from "protractor";
import { HomePage } from "../src/page";


describe('Given a QA is interested in Selenium Certification Trainning', () => {
  describe('when visiting our website', () => {
    beforeEach(async () => {
      browser.waitForAngularEnabled(false)
      await browser.driver.get('https://demoqa.com/');
    });

    it('then should be able to navigate to trainning page', async () => {
      const homePage: HomePage = new HomePage();
      await homePage.joinNow();

      let handles = await browser.getAllWindowHandles();
      browser.switchTo().window(handles[1]);
      console.log(handles[1]);
      console.log(await browser.driver.getCurrentUrl());
      expect(await browser.driver.getCurrentUrl()).toEqual('https://www.toolsqa.com/selenium-training/');
    });
  });
});
