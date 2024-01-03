const homeContainerElement = '[data-testid="home-container"]';
const logoutBtnElement = '[data-testid="logout-btn"]';
const productsListElement = '[data-testid="products-list"]';
const overviewElement = '[data-testid="overview"]';
const commandsElement = '[data-testid="comments"]';
const commentsListElement = '[data-testid="comments-list"]';
const overviewItemsElement = '[data-testid="overview-items"]';
const productsItemsElement = '[data-testid="products-items"]';
const newProductBtnElement = '[data-testid="new-product-btn"]';
const deleteBtnElement = '[data-testid="delete-btn"]';
const viewBtnElement = '[data-testid="view-btn"]';
const editBtnElement = '[data-testid="edit-btn"]';

describe('Home tests', () => {
  beforeEach(() => {
    cy.login();
    cy.intercept('GET', '**/api/v1/product', {
      fixture: 'products.json',
    }).as('productsApi');
    cy.visit('/');
  });

  it('should open home page correctly', () => {
    cy.get(homeContainerElement).should('be.visible');
  });

  it('should logout user when logout button is clicked', () => {
    cy.get(logoutBtnElement).click();
    cy.location('pathname').should('eq', '/login');
  });

  it('should render sections correctly', () => {
    cy.get(overviewElement).should('be.visible');
    cy.get(commandsElement).should('be.visible');
    cy.get(productsListElement).should('be.visible');
  });

  it('should scroll comments correclty', () => {
    cy.get(commandsElement).should('be.visible');
    cy.get(commentsListElement).children().first().should('be.visible');
    cy.get(commentsListElement).scrollTo('bottom');
    cy.get(commentsListElement).children().last().should('be.visible');
  });

  it('should show three overviews', () => {
    cy.get(overviewItemsElement).children().should('have.length', 3);
  });

  it('should list corect number of products', () => {
    cy.get(productsItemsElement).find('.ag-row').should('have.length', 18);
  });

  it('should open new product page', () => {
    cy.get(newProductBtnElement).click();
    cy.location('pathname').should('eq', '/new_product');
  });
  it('should open edit product page', () => {
    cy.get(productsItemsElement)
      .find('.ag-row')
      .first()
      .find(editBtnElement)
      .click();
    cy.location('pathname').should('eq', '/13/edit');
  });
  it('should show product page', () => {
    cy.get(productsItemsElement)
      .find('.ag-row')
      .first()
      .find(viewBtnElement)
      .click();
    cy.location('pathname').should('eq', '/13');
  });

  it('should delete product', () => {
    cy.intercept('DELETE', '**/api/v1/product/13', {
      fixture: 'product-deleted.json',
    }).as('productDeletedAPI');

    cy.intercept('GET', '**/api/v1/product', {
      fixture: 'products-after-delete.json',
    }).as('productsAfteDeleteApi');

    cy.get(productsItemsElement)
      .find('.ag-row')
      .first()
      .find(deleteBtnElement)
      .click();
    cy.wait('@productsAfteDeleteApi');
    cy.get(productsItemsElement).find('.ag-row').should('have.length', 17);
  });

  it('should show no product', () => {
    cy.intercept('GET', '**/api/v1/product', {
      fixture: 'no-products.json',
    }).as('noProductApi');
    cy.wait('@noProductApi');
    cy.get(productsItemsElement)
      .find('.ag-overlay-no-rows-center')
      .should('exist');
  });
});
