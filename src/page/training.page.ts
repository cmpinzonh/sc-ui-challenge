import { $, ElementFinder } from 'protractor';

export class TrainingPage {
  private goToRegistrationButton: ElementFinder;
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private emailInput: ElementFinder;
  private mobileInput: ElementFinder;
  private countryInput: ElementFinder;
  private cityInput: ElementFinder;
  private messageInput: ElementFinder;
  public sendRegistrationButton: ElementFinder;

  constructor () {
    this.goToRegistrationButton = $('a.btn-block[href="#enroll-form"]');
    this.firstNameInput = $('#first-name');
    this.lastNameInput = $('#last-name');
    this.emailInput = $('#email');
    this.mobileInput = $('#mobile')
    this.countryInput = $('#country');
    this.cityInput = $('#city');
    this.messageInput = $('#message');
    this.sendRegistrationButton = $('#enroll-form .btn')
  }

  public async goToRegistration(): Promise<void> {
    await this.goToRegistrationButton.click();
  }

  public async fillRegistrationForm(): Promise<void> {
    await this.firstNameInput.sendKeys("Miguel");
    await this.lastNameInput.sendKeys("Pinzon");
    await this.emailInput.sendKeys("miguel" + Math.random() + "@yopmail.com");
    await this.mobileInput.sendKeys("3556478945");
    await this.countryInput.sendKeys("Colombia");
    await this.cityInput.sendKeys("Bogota");
    await this.messageInput.sendKeys("Why, hello there.");

  }
}
