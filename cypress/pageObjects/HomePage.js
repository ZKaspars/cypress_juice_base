import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  
  static get AccountBtn() {
    return cy.get("[aria-label='Show/hide account menu']");
  }
  static get LoginBtn() {
    return cy.get("#navbarLoginButton");
  }
 
  static get menuItems() {
    return cy.get("[role='menuitem']");
  }

  static get menuText() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchButton() {
    return cy.get("#searchQuery");
  }

  static get searchField() {
    return cy.get("#searchQuery input");
  }
  static get juiceCards() {
    return cy.get("[aria-label='Click for more information about the product']");
  }
  static get cardInfoMessage() {
    return cy.get(".mat-dialog-content");
  }
  static get closeDialog() {
    return cy.get("[aria-label='Close Dialog']");
  }
  static get openSelection() {
    return cy.get(".mat-select-value");
  }
  static get selectChoice() {
    return cy.get(".mat-option-text");
  }
  static get reviewBar() {
    return cy.get(".mat-expansion-panel-header-title");
  }
  static get allItems() {
    return cy.get(".mat-option-text");
  }
  static get ReviewField() {
    return cy.get("[aria-label='Text field to review a product']");
  }
  static get ReviewInfoMessage() {
    return cy.get(".mat-expansion-panel-body");
  }
  static get submitButton() {
    return cy.get("#submitButton");
  }

  
}

export default HomePage;
