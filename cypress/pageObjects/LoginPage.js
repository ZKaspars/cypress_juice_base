import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  
  static get newCustomerLink() {
    return cy.get("#newCustomerLink");
  }
 
  static get emailAddressField() {
    return cy.get("#email");
  }
  static get passwordAddressField() {
    return cy.get("#password");
  }
  static get loginBtn() {
    return cy.get("#loginButton");
  }

}


export default LoginPage;
