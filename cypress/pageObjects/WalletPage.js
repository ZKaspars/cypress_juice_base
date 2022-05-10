import BasePage from "./basePage";

class WalletPage extends BasePage {
  static get url() {
    return "/#/wallet";
  }
  static get walletBalance() {
    return cy.get(".confirmation");
  }

  static get amountInputField(){
  return cy.get("[aria-label='Enter an amount']")
}
  
  
  }

export default WalletPage;