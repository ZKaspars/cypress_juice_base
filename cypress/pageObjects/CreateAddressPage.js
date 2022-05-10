import BasePage from "./basePage";

class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }
  static get countryField() {
    return cy.get("[data-placeholder='Please provide a country.']");
  }
  static get nameField() {
    return cy.get("[data-placeholder='Please provide a name.']");
  }
  static get numberField() {
    return cy.get("[data-placeholder='Please provide a mobile number.']");
  }
  static get zipField() {
    return cy.get("[data-placeholder='Please provide a ZIP code.']");
  }
  static get addressField() {
    return cy.get("[data-placeholder='Please provide an address.']");
  }
  static get cityField() {
    return cy.get("[data-placeholder='Please provide a city.']");
  }
  static get stateField() {
    return cy.get("[data-placeholder='Please provide a state.']");
  }
  
  
  
  
  
  }

export default CreateAddressPage;