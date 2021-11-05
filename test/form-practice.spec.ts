import { browser } from "protractor";
import { HomePage, FormsPracticePage } from "../src/page";

describe('An user wants to practice form filling automation', () => {
  browser.waitForAngularEnabled(false);
  beforeAll(async () => {
    await browser.driver.manage().window().maximize();
    await browser.get('https://demoqa.com/');
  });

  describe('When the user navigates to the form practice page', () => {
    beforeAll(async () => {
      const homePage: HomePage = new HomePage();
      await homePage.goToFormsPractice();

      expect(await browser.driver.getCurrentUrl()).toEqual('https://demoqa.com/forms');
    });

    describe('and opens the practice form and fills it out', () => {
      beforeAll(async () => {
        const formsPracticePage: FormsPracticePage = new FormsPracticePage();
        await formsPracticePage.goToForm();

        expect(await browser.driver.getCurrentUrl()).toEqual('https://demoqa.com/automation-practice-form');

        await formsPracticePage.fillForm();

        await formsPracticePage.submitForm();
      });

      it('a modal indicatig that the submmital was succesful should be displayed', async () => {

        const formsPracticePage: FormsPracticePage = new FormsPracticePage();
        await browser.sleep(3000);
        expect(formsPracticePage.getSuccessModalTitle()).toEqual("Thanks for submitting the form");

      })

    });
  });
});
