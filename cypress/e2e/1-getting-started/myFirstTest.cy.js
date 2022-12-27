const navbarText = Cypress.env('navbarText')

context('My first test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
      it('types into an email field', () => {
      cy.visit('/commands/actions')
      cy.findByPlaceholderText('Email').type('test@email.com')
      cy.wait(2000).then(() => {
        console.log("test finished")
        fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
      })
  })
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