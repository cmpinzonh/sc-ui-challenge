import { $, ElementFinder, element, by } from 'protractor';

export class HomePage {
  private joinNowButton: ElementFinder;
  private formsCard: ElementFinder;

  constructor () {
    this.joinNowButton = $('.home-banner img');
    this.formsCard = element(by.cssContainingText('.card-body', 'Forms'));
  }

  public async joinNow(): Promise<void> {
    await this.joinNowButton.click();
  }

  public async goToFormsPractice(): Promise<void> {
    await this.formsCard.click();
  }
}
