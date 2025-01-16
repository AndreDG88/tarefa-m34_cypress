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

    //Configuração do teste para inclusão
    it('Deve alterar as informações de um contato da agenda', () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
        cy.get('input[type="text"]').clear().type("Contato Exemplo")
        cy.get('input[type="email"]').clear().type("Contato.email@teste.com")
        cy.get('input[type="tel"]').clear().type("11 11111-1111")
        cy.get(".alterar").click()
        cy.screenshot("print-edicao")
    })
})