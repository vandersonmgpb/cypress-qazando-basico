/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import commum_page from "../support/pages/commum_page"
import cadastro_page from "../support/pages/cadastro_usuario_page"

describe('Cadastro de usuário', () => {

    beforeEach ('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })
    
    it('Cadastro nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })    
    
    it('Cadastro E-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })    
    
    it('Cadastro E-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
        
    })    
    
    it('Cadastro senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
    })    
    
    it('Cadastro senha inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preenchePassword('0123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
    })
    
    it('Cadastro com sucesso', async () => {

        const name = faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preenchePassword('0123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
    })    
})