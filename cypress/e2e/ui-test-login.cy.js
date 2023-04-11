describe('Goes to login page', function() {
  beforeEach(function() {
    cy.visit(Cypress.env("baseUrl"))
    cy.request('GET', Cypress.env("baseUrl")).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.fixture('test-data.json').then(function(data) {
      this.data = data
    });
  })

  it('Goes to Login page via Homepage screen', function() {
    cy.visit('https://www.hudl.com/en_gb/')
    cy.get('[data-qa-id="login-select"]').click()
    cy.get('[data-qa-id="login-hudl"]').click()
    cy.url().should('include', 'login')
  })

  it('Log in successfully with valid email and password', function() {
    loginWith(this.data.valid_email, this.data.valid_password)
    expect(cy.get('[data-qa-id="webnav-globalnav-home"]')).to.exist
  })

  it('Remember me tick box is checked', function() {
    cy.get('div.uni-form__check-item').should('exist')
    cy.get('[data-qa-id="remember-me-checkbox"]').check({force: true})
    cy.get('div.uni-form__check-item.uni-form__check-item--is-checked').should('exist')
  })

  it('Log in fails with invalid credentials', function()  {
    loginWith(this.data.invalid_email, this.data.valid_password)
    cy.get('[data-qa-id="error-display"]').should('have.text', "We didn't recognize that email and/or password.Need help?")
  })

  it('Goes to Need Help page via log in failure error message and email input field is populated', function() {
    loginWith(this.data.invalid_email, this.data.valid_password);
    cy.get('p').find('a').should('have.class', 'uni-link uni-link--default uni-margin--quarter--left').click()
    cy.url().should('include', 'login/help')
    cy.get('input[data-qa-id="password-reset-input"]').should('have.value', this.data.invalid_email);

  })

  it('Goes to Need Help page via the `Need help?` link and email input field is emptied', function() {
    cy.get('[data-qa-id="need-help-link"]').click()
    cy.url().should('include', 'login/help');
    cy.get('input[data-qa-id="password-reset-input"]').should('have.value', '')
  })

  it('Log in fails on Organization Login page and user is taken back to general Login page', function() {
    cy.get('[data-qa-id="log-in-with-organization-btn"]').click()
    cy.url().should('include', 'login/organization')
    cy.get('input[id="uniId_1"]').type(this.data.valid_email)
    cy.get('[data-qa-id="log-in-with-sso"]').click()
    cy.url().should('include', 'login')
    cy.get('[data-qa-id="error-display"]').should('have.text', "This account can't log in with an organization yet. Please log in using your email and password.")

  })

  it('Goes to Sign up page', function() {
    cy.contains('Sign up').should('have.attr','href','/register/signup').click()
    cy.url().should('include', 'register/signup')
    
  })

  // Helper
  const loginWith = (email, password) => {
    cy.get('[data-qa-id="email-input"]').type(email)
    cy.get('[data-qa-id="password-input"]').type(password)
    cy.get('[data-qa-id="login-btn"]').click()
  }

})