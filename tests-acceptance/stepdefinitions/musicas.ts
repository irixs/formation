import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sameArtista = ((elem, artista) => elem.element(by.name('artistalist')).getText().then(text => text === artista));
let sameTitulo = ((elem, titulo) => elem.element(by.name('titulolist')).getText().then(text => text === titulo));
let sameID = ((elem, id) => elem.element(by.name('idlist')).getText().then(text => text === id));

let pAND = ((p,q,r) => p.then(a => q.then(b => r.then(c => (a && b) && c))))

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou na pagina de login$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('FormationGui');
        // CADASTRO
        await $("input[name='cpfbox']").sendKeys(<string> "701");
        await $("input[name='nomebox']").sendKeys(<string> "Rebeca");
        await element(by.buttonText('Cadastrar')).click();
        // LOGIN
        await $("input[name='loginbox']").sendKeys(<string> "701");
        await element(by.buttonText('Fazer login')).click();
    })

    Given(/^eu estou na pagina de cadastro de musica$/, async () => {
        // HOME
        await browser.get("http://localhost:4200/administrador");
        await $("[name='cadastromusica']").click();
    })

    Given(/^nao existe uma musica com titulo “([^\"]*)”, artista “([^\"]*)” e ID "(\d*)" na lista de musicas disponiveis$/, async (titulo, artista, id) => {
        var allmusicas : ElementArrayFinder = element.all(by.name('musicaslist'));
        var samemusica = allmusicas.filter(elem =>
            pAND(sameArtista(elem,artista),sameTitulo(elem,titulo),sameID(elem,id)));
        await samemusica.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    When(/^eu cadastro uma musica com titulo “([^\"]*)”, artista “([^\"]*)”, integrantes “([^\"]*)” e ID "(\d*)"$/, async (titulo, artista, integrantes, id) => {
        await $("input[name='titulobox']").sendKeys(<string> titulo);
        await $("input[name='artistabox']").sendKeys(<string> artista);
        await $("input[name='integrantesbox']").sendKeys(<string> integrantes);
        await $("input[name='idbox']").sendKeys(<string> id);
        await element(by.buttonText('Adicionar')).click();
    });

    Then(/^eu posso ver na lista musicas disponiveis a musica com titulo “([^\"]*)”, artista “([^\"]*)” e ID "(\d*)"$/, async (titulo, artista, id) => {
        var allmusicas : ElementArrayFinder = element.all(by.name('musicaslist'));
        await allmusicas.filter(elem => pAND(sameArtista(elem,artista),sameTitulo(elem,titulo),sameID(elem,id))).then
                   (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})