describe('Testing WCAG compliance on /about page', () => {
    before(() => {
        cy.visit('/about');
        cy.injectAxe();
    });
    it('should not be compliant', () => {
        cy.url().should('eq','http://localhost:3000/about');
        cy.checkA11y();
    })
    
})
