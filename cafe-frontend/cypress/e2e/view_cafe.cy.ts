describe('Visualização de uma cafeteria', () => {
    it('deve exibir os detalhes corretamente', () => {
        cy.visit('http://localhost:5173/view/7')
        cy.contains('Cafeteria 7:')
        cy.contains('Nome:')
        cy.contains('Avaliação:')
        cy.contains('/10')
        cy.get('a').contains('Voltar').click()
        cy.url().should('eq', 'http://localhost:5173/')
    })
})