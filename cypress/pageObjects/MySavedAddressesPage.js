import BasePage from "./basePage";

class MySavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  static get newCustomerLink() {
    return cy.get("#newCustomerLink");
  }
  static get addNewAddressButton() {
    return cy.get("[aria-label='Add a new address']");
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

  static get rows() {
    return cy.get("[role='row']");
  }

  static findRow(value) {
    return this.rows.contains(value).parent();
  }
  
}

export default MySavedAddressesPage;