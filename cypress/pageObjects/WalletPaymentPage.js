import BasePage from "./basePage";

class WalletPaymentPage extends BasePage {
  static get url() {
    return "/#/payment/wallet";
  }

  static get continueButton() {
    return cy.get(".nextButton");
  }
}

export default WalletPaymentPage;