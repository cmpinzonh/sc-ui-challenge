import { $, ElementFinder } from 'protractor';

export class TrainingPage {
  private goToRegistrationButton: ElementFinder;

  constructor () {
    this.goToRegistrationButton = $('a.btn-shadow[href="#enroll-form"]');
  }

  public async goToRegistration(): Promise<void> {
    await this.goToRegistrationButton.click();
  }
}
