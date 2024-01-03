const titleInputElement = '[data-testid="title-input"]';
const priceInputElement = '[data-testid="price-input"]';
const descriptionInputElement = '[data-testid="description-input"]';
const saveButtonElement = '[data-testid="save-btn"]';
const gobackBtnElement = '[data-testid="goback-btn"]';
const titleErrorElement = '[data-testid="title-error"]';
const priceErrorElement = '[data-testid="price-error"]';
const descriptionErrorElement = '[data-testid="description-error"]';

describe('New Product Page', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/new_product');
  });
  it('should open new product page correctly', () => {
    cy.get(titleInputElement).should('be.visible');
    cy.get(priceInputElement).should('be.visible');
    cy.get(descriptionInputElement).should('be.visible');
    cy.get(saveButtonElement).should('be.visible');
    cy.get(gobackBtnElement).should('be.visible');
  });

  it('should go back to home page after clicking on go back button', () => {
    cy.get(gobackBtnElement).click();
    cy.location('pathname').should('eq', '/');
  });

  it('should throw error if inputs are empty', () => {
    cy.get(saveButtonElement).click();
    cy.get(titleErrorElement).should('be.visible');
    cy.get(priceErrorElement).should('be.visible');
    cy.get(descriptionErrorElement).should('be.visible');
  });

  it('should add new product', () => {
    cy.intercept('POST', '**/api/v1/product', {
      fixture: 'new-product.json',
    }).as('newProduictApi');
    cy.get(titleInputElement).type('test');
    cy.get(priceInputElement).type(1000);
    cy.get(descriptionInputElement).type('Hello world!');
    cy.get(saveButtonElement).click();
    cy.wait('@newProduictApi');
    cy.location('pathname').should('eq', '/');
  });
});
