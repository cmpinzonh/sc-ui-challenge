import { $, ElementFinder } from 'protractor';

export class TabsPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor () {
    this.proceedToCheckoutButton = $('[name="processAddress"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
