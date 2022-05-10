import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }


 
  static get emailAddressField() {
    return cy.get("[aria-label='Email address field']");
  }

  static get passwordField() {
    return cy.get("[aria-label='Field for the password']");
  }
  static get passwordConfirmField() {
    return cy.get("[aria-label='Field to confirm the password']");
  }
  static get securityQuestionOpen() {
    return cy.get("[aria-label='Selection list for the security question']");
  }
  static get securityQuestionPick() {
    return cy.get(".mat-option-text").eq(1);
  }
  static get answerField() {
    return cy.get("#securityAnswerControl");
  }
  static get registerBtn() {
    return cy.get("#registerButton");
  }
}

export default RegisterPage;
