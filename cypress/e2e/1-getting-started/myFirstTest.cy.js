const navbarText = Cypress.env('navbarText')

context('My first test', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

  it('sets a token in local storage', () => {
    cy.setLocalStorage('token', 'abc123')
  })

  //  it('uses fixture data in a network request', function() {
  //    cy.visit('/commands/network-requests')
  //    cy.intercept('GET', '**/comments/*', this.data).as('getComment') //looking for a get request that is pointing to our commends endpoint
  //    cy.get('.network-btn').click()
  //    cy.wait('@getComment').then((res) => {
  //      cy.log('Response:', res)
  //    })
  //  })
  //
  //  it('pulls data from a fixture', () => {
  //    cy.fixture('example').then((data) => {
  //      cy.log('DATA: ', data)
  //    })
  //  })

  //  it('updates fixtures data inline', () => {
  //    cy.fixture('example').then((data) => {
  //      data.email = 'updated@mail.com'
  //      cy.log("UPADTED: ", data)
  //    })
  //  })
  //  beforeEach(() => {
  //    cy.visit('/')
  //  })
  //  before(() => {
  //    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  //  })
  //
  //  beforeEach(() => {
  //    cy.visit('/')
  //  })
  //
  //  afterEach(() => {
  //    cy.log('after each hook is here')
  //  })
  //
  //  after(() => {
  //    cy.log('the final after hook runs once')
  //  })
  //
  //  it('visits the homepage', () => {
  //    cy.get('h1').should('exist')
  //  })
  //
  //  it('should have an h1 on the page', () => {
  //    cy.get('h1').should('contain.text', 'Kitchen Sink')
  //  })


//  it('links to the actions page correctly', () => {
//    cy.visit('/')
//    cy.findAllByText('Actions').first().click({force: true})
//    cy.url().should('include', 'commands/actions')
//  })
//
//  it('lets you type in an input field', () => {
//    cy.visit('/commands/actions')
//    cy.findByPlaceholderText("Email").type("Test").should('have.value', 'Test')
//  })
//
//  it('lets you clear an input field', () => {
//    cy.visit('/commands/actions')
//    cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
//    .clear().should('have.value', '')
//  })
//
//  it('lets you check a checkbox', () => {
//    cy.visit('/commands/actions')
//    cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true}).should('be.checked')
//  })
//  it('shows an active class for the current page', () => {
//    cy.visit('/commands/actions')
//    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
//  })
//
//  it('should not have an active class on inactive pages', () => {
//    cy.visit('/commands/actions')
//    cy.get('.dropdown-menu').find('li').first()
//    .should('not.have.class', 'active')
//    .find('a')
//    .should('have.attr', 'href', '/commands/querying')
//  })
//  it('types into an email field', () => {
//    cy.visit('/commands/actions')
//    cy.findByPlaceholderText('Email').type('test@email.com')
//    cy.wait(2000).then(() => {
//      console.log("test finished")
//      fetch('https://api.spacexdata.com/v3/missions')
//        .then((res) => res.json())
//        .then((data) => {
//          console.log(data)
//        })
//    })
//  })
//  it('correctly renders the cypress website link', () => {
//    cy.findByText(navbarText).should('exist')
//  })
//  it('has an h1 on the page', () => {
//    cy.get('h1').should('exist');
//  })
//  it('renders the correct h1 text', () => {
//    cy.get('h1').should('contain.text', "Actions");
//  })
//  it('renders a paragraph under the h1', () => {
//    cy.get('.container').eq(1).find('p').should('exist')
//  })
//  it('renders a section with the correct elements', () => {
//    cy.get('.container').eq(2).within(() => {
//      cy.get('h4').should('exist')
//      cy.get('p').should('exist')
//    })
//  })
})