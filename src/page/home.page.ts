import { $, ElementFinder, element, by } from 'protractor';

export class HomePage {
  private joinNowButton: ElementFinder;
  private formsCard: ElementFinder;
  private closeAddButton: ElementFinder;

  constructor () {
    this.joinNowButton = $('.home-banner img');
    this.formsCard = element(by.cssContainingText('.card-body', 'Forms'));
    this.closeAddButton = $('#close-fixedban');
  }

  public async joinNow(): Promise<void> {
    await this.joinNowButton.click();
  }

  public async goToFormsPractice(): Promise<void> {
    await this.formsCard.click();
  }

  public async closeAdd(): Promise<void> {
    await this.closeAddButton.click();
  }
}
