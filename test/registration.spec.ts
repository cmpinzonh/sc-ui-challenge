import { browser } from "protractor";
import { TrainingPage } from "../src/page";

describe('Given a user wants to register for a course', () => {
  beforeAll(async () => {
    browser.waitForAngularEnabled(false)
    await browser.get('https://www.toolsqa.com/selenium-training/');
  });

  it('user should be able to fill registration form', async () => {

      const trainingPage: TrainingPage = new TrainingPage();
      await trainingPage.goToRegistration();
      expect(await browser.driver.getCurrentUrl()).toEqual('https://www.toolsqa.com/selenium-training/#enroll-form');
      await trainingPage.fillRegistrationForm();

      await expect(trainingPage.sendRegistrationButton.isEnabled()).toBe(true);

  });
});
