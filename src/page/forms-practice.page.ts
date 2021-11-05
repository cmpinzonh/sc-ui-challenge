import { $, ElementFinder, element, by } from 'protractor';

export class FormsPracticePage {
  private practiceFormButton: ElementFinder;
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private emailField: ElementFinder;
  private maleGenderRadioButton: ElementFinder;
  private mobileField: ElementFinder;
  private addressField: ElementFinder;
  private submitButton: ElementFinder;

  private closeAddButton: ElementFinder;
  private successModalTitle: ElementFinder;


  constructor () {
    this.practiceFormButton = element(by.cssContainingText('.btn .text', 'Practice Form'));
    this.firstNameField = $('#firstName');
    this.lastNameField = $('#lastName');
    this.emailField = $('#userEmail');
    this.maleGenderRadioButton = element(by.cssContainingText('.custom-radio', 'Male'));
    this.mobileField = $('#userNumber');
    this.addressField = $('#currentAddress');
    this.submitButton = $('#submit');
    this.closeAddButton = $('#close-fixedban');
    this.successModalTitle = $('#example-modal-sizes-title-lg');
  }

  public async goToForm(): Promise<void> {
    await this.practiceFormButton.click();
  }

  public async fillForm(): Promise<void> {
    await this.firstNameField.sendKeys("Miguel");
    await this.lastNameField.sendKeys("Pinzon");
    await this.emailField.sendKeys("mph@yopmail.com");
    await this.maleGenderRadioButton.click();
    await this.mobileField.sendKeys("5712266151");
    await this.addressField.sendKeys("123 Fake Street");

  }

  public async submitForm(): Promise<void> {
    await this.closeAddButton.click();
    await this.submitButton.click();
  }

  public async getSuccessModalTitle(): Promise<string> {
    const title = await this.successModalTitle.getText();

    return title;
  }
}
