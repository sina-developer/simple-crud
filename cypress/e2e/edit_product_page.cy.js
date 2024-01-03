const titleInputElement = '[data-testid="title-input"]';
const priceInputElement = '[data-testid="price-input"]';
const descriptionInputElement = '[data-testid="description-input"]';
const saveButtonElement = '[data-testid="save-btn"]';
const gobackBtnElement = '[data-testid="goback-btn"]';
const titleErrorElement = '[data-testid="title-error"]';
const priceErrorElement = '[data-testid="price-error"]';
const descriptionErrorElement = '[data-testid="description-error"]';

describe('Edit Product Page', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', '**/api/v1/product/13', {
      fixture: 'edit-product.json',
    });
    cy.visit('/13/edit');
  });
  it('should open edit product page correctly', () => {
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
    cy.get(titleInputElement).clear();
    cy.get(priceInputElement).clear();
    cy.get(descriptionInputElement).clear();
    cy.get(saveButtonElement).click();
    cy.get(titleErrorElement).should('be.visible');
    cy.get(priceErrorElement).should('be.visible');
    cy.get(descriptionErrorElement).should('be.visible');
  });

  it.only('should edit the product', () => {
    cy.intercept('PUT', '**/api/v1/product/13', {
      fixture: 'edit-product.json',
    }).as('editProduictApi');
    cy.get(titleInputElement).type('test');
    cy.get(priceInputElement).type(1000);
    cy.get(descriptionInputElement).type('Hello world!');
    cy.get(saveButtonElement).click();
    cy.wait('@editProduictApi');
    cy.location('pathname').should('eq', '/');
  });
});
