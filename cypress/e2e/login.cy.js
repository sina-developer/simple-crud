const usernameInputElement = '[data-testid="username-input"]';
const usernameErrorElement = '[data-testid="username-error"]';
const passwordInputElement = '[data-testid="password-input"]';
const passwordErrorElement = '[data-testid="password-error"]';
const loginButtonElement = '[data-testid="login-button"]';
const loadingElement = '[data-testid="loading"]';
const errorElement = '[data-testid="error"]';

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');

    cy.intercept('GET', '**/api/v1/User/1', {
      fixture: 'user-login.json',
    }).as('loginApi');
  });
  it('should open login page correctly', () => {
    cy.get(usernameInputElement).should('be.visible');
    cy.get(passwordInputElement).should('be.visible');
    cy.get(loginButtonElement).should('be.visible');
  });

  it('should redirect to login if not logged in', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
  });

  it('should redirect to home if logged in', () => {
    cy.get(usernameInputElement).type('sina');
    cy.get(passwordInputElement).type('12345678');
    cy.get(loginButtonElement).click();
    cy.get(loadingElement).should('be.visible');
    cy.wait('@loginApi');
    cy.location('pathname').should('eq', '/');
  });

  it('should show input errors if credentials are invalid', () => {
    cy.get(usernameInputElement).type('sina2');
    cy.get(passwordInputElement).type('123456780');
    cy.get(loginButtonElement).click();
    cy.wait('@loginApi');
    cy.get(usernameErrorElement).should('be.visible');
  });
});
