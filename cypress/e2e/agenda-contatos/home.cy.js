//O "comentário" abaixo faz com que o VS Code entenda a tipagem do Cypress
/// <reference types="cypress"/>

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/') // para o cypress visitar a site a ser analizado
    })

    //Configuração do teste para inclusão
    it('Deve incluir os dados do novo contato', () => {
        cy.get('input[type="text"]').type("André Soares")
        cy.get('input[type="email"]').type("andre.email@teste.com")
        cy.get('input[type="tel"]').type("00 00000-0000")
        cy.contains("Adicionar").click()
        cy.screenshot("print-inclusao") // Para gerar um print do teste finalizado
    })
})