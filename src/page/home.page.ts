import { $, ElementFinder } from 'protractor';

export class HomePage {
  private joinNowButton: ElementFinder;

  constructor () {
    this.joinNowButton = $('.home-banner img');
  }

  public async joinNow(): Promise<void> {
    await this.joinNowButton.click();
  }
}
