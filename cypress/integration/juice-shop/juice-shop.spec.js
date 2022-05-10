import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import MySavedAddressesPage from "../../pageObjects/MySavedAddressesPage";
import CreateAddressPage from "../../pageObjects/CreateAddressPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import WalletPage from "../../pageObjects/WalletPage";
import WalletPaymentPage from "../../pageObjects/WalletPaymentPage";


describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
   // TODO: Implement me
   //Click account button
   HomePage.AccountBtn.click();
   //Click login
   HomePage.LoginBtn.click();
   // Click not yet a customer
   LoginPage.newCustomerLink.click();
   // input info
   RegisterPage.emailAddressField.type("asdfyr"+ Math.floor(Math.random() * 100)+Math.floor(Math.random() * 100)+"@gmail.com");
   RegisterPage.passwordField.type("something111");
   RegisterPage.passwordConfirmField.type("something111");
   RegisterPage.securityQuestionOpen.click();
   RegisterPage.securityQuestionPick.click();
   RegisterPage.answerField.type("lmao");
   //click register
   RegisterPage.registerBtn.click();
   // validate that toast message contains "Registration completed successfully. You can now log in."
   LoginPage.toastMessage.should("contain","Registration completed successfully. You can now log in.");
  });


  it("Login into system with demo acc", () => {
      // demo acc: demo demo
         //Click account button
   HomePage.AccountBtn.click();
      //Click login
      HomePage.LoginBtn.click();
      //enter info
      LoginPage.emailAddressField.type("demo");
      LoginPage.passwordAddressField.type("demo");
      //click login
      LoginPage.loginBtn.click();
      HomePage.AccountBtn.click();
      // validate account name is demo
      HomePage.menuItems.eq(0).should("contain","demo");
      HomePage.menuText.should("contain","demo");

  });
});


describe("Auto login for Juice-shop", () => {
  beforeEach(() => {
    cy.login("demo","demo");
    HomePage.visit();
  });
  it("Login into system with demo acc", () => {
    /*HomePage.AccountBtn.click()
    HomePage.menuItems.eq(0).should("contain","demo");
    HomePage.menuText.should("contain","demo");*/

    // Search and validate Lemon

// - Search for Lemon
  HomePage.searchButton.click();
  // - Click on Lemon card
  HomePage.searchField.type("lemon{enter}")
  HomePage.juiceCards.contains('Lemon').click();
  // Validate - "Sour but full of vitamins."
  HomePage.cardInfoMessage.should("contain","Sour but full of vitamins");


});


it("Search 500ml and validate Lemon", () => {
// Search 500ml and validate Lemon
HomePage.searchButton.click();
// - Search for 500ml
HomePage.searchField.type("500{enter}")
// - Click on Lemon card
HomePage.juiceCards.contains('Lemon').click();
// Validate - "Sour but full of vitamins."
HomePage.cardInfoMessage.should("contain","Sour but full of vitamins");
});


it("Search 500ml and validate All cards", () => {
// Search 500ml and validate All cards

// - Search for 500ml
HomePage.searchButton.click();
HomePage.searchField.type("500{enter}")
// - Validate Eggfruit => "Now with even more exotic flavour."
HomePage.juiceCards.contains('Eggfruit').click();
HomePage.cardInfoMessage.should("contain","Now with even more exotic flavour.");
HomePage.closeDialog.click();
// - Validate Lemon => "Sour but full of vitamins."
HomePage.juiceCards.contains('Lemon').click();
HomePage.cardInfoMessage.should("contain","Sour but full of vitamins.");
HomePage.closeDialog.click();
// - Validate Strawberry => "Sweet & tasty!"
HomePage.juiceCards.contains('Strawberry').click();
HomePage.cardInfoMessage.should("contain","Sweet & tasty!");
HomePage.closeDialog.click();
});

it("Validate different sets of available cards -> 12, 24, 36", () => {
// Validate different sets of available cards -> 12, 24, 36
HomePage.openSelection.click();

// Set Items per page to 12
HomePage.selectChoice.contains(12).click();

// Validate that we see 12 items
HomePage.juiceCards.should("have.length",12);


// Set Items per page to 24
HomePage.openSelection.click();
HomePage.selectChoice.contains(24).click();

// Validate that we see 24 items
HomePage.juiceCards.should("have.length",24);

// Set Items per page to 36
HomePage.openSelection.click();
HomePage.selectChoice.contains(36).click();

// Validate that we see 36 items
HomePage.juiceCards.should("have.length",35);
});

it("Read a review for King", () => {

// - Search for King
HomePage.searchButton.click();
HomePage.searchField.type("King{enter}")
HomePage.juiceCards.contains('King').click();
// - Validate that the review contains "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
HomePage.ReviewInfoMessage.should("contain","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
HomePage.reviewBar.click();
});

it("Add a review for Raspberry", () => {

// - Search for Raspberry
HomePage.searchButton.click();
HomePage.searchField.type("Raspberry{enter}")
HomePage.juiceCards.contains('Raspberry').click()
// - Add review => "Tastes like metal"
HomePage.ReviewField.click();
HomePage.ReviewField.type("Tastes like metal");
HomePage.submitButton.click();
HomePage.toastMessage.should("contain", "You review has been saved.")
HomePage.reviewBar.click();
HomePage.ReviewInfoMessage.should("contain","Tastes like metal");
// - Validate that review contains "Tastes like metal"
});

it("Add address", () => {

// Open Saved addresses page (/#/address/saved) (directly)
MySavedAddressesPage.visit();
//Click add enw addresses
MySavedAddressesPage.addNewAddressButton.click();
//Add info
CreateAddressPage.countryField.type("France");
CreateAddressPage.nameField.type("some location");
CreateAddressPage.numberField.type("123123123");
CreateAddressPage.zipField.type("21234");
CreateAddressPage.addressField.type("address");
CreateAddressPage.cityField.type("Nova");
CreateAddressPage.stateField.type("its a state");
CreateAddressPage.submitButton.click();
CreateAddressPage.toastMessage.should(
  "contain",
  "The address at Nova has been successfully added")
//click submit
//validate toast message - "The address at Stockholm has been successfully added"
// validate newly added address
MySavedAddressesPage.findRow("France").should("contain", "France");

});


it.only("incrase balance", () => {
WalletPage.visit();
WalletPage.walletBalance.should("be.visible").then((el) => {
  cy.wrap(el.text()).as("currentBalanceValue");

  const amount = 100;
  WalletPage.amountInputField.type(amount);
  WalletPage.submitButton.click();
  WalletPaymentPage.assertIsCurrentPage();
  WalletPaymentPage.rows
  .contains('5678')
  .parent()
  .find('.mat-radio-inner-circle')
  .click();
  WalletPaymentPage.continueButton.click();
  WalletPaymentPage.toastMessage.should(
    "have.text",
    "Wallet successfully charged."
    );

    WalletPage.walletBalance.should("be.visible").then((el) => {
      cy.get("@currentBalanceValue").then((value) =>{
        expect(parseFloat(el.text())).to.eq(parseFloat(value) + amount)
      });
    });
    });
  });
});