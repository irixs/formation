import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import cucumber = require('cucumber');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sameArtista = ((elem, artista) => elem.element(by.name('artistalist')).getText().then(text => text === artista));
let sameTitulo = ((elem, titulo) => elem.element(by.name('titulolist')).getText().then(text => text === titulo));
let sameValue = ((elem, value) => elem.element(by.id('toggle')).get().then(text => text === value));

async function clicar(titulo, artista, bool) {
    await acharMusica(titulo, artista, bool);
    await element(by.id('toggle')).click();
}

// verifica se existe uma musica cadastrada com o titulo e artista
async function acharMusica(titulo, artista, bool) { 
    var allmusicas : ElementArrayFinder = element.all(by.name('musicaslist'));
    await allmusicas.filter(elem =>(sameArtista(elem,artista) && sameTitulo(elem,titulo)));
    await (elem => (sameValue(element(by.model('interesses[i]')).getText(), bool)));
}

// passos
defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou logada como "([^\"]*)" e com CPF "(\d*)"$/, async (nome, cpf) => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Formation');
        await element(by.buttonText('Sair')).click();
        await browser.get("http://localhost:4200/");
        await $("input[name='loginbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Fazer login')).click();
    });

    Given(/^eu estou na pagina de home$/, async () => {
        await browser.get("http://localhost:4200/home");
    });

    Given(/^eu vejo em Musicas Disponiveis “([^\"]*)”, de artista “([^\"]*)” sem confirmação$/, async (titulo, artista) => {
        await (acharMusica(titulo, artista, false));
    });
    Given(/^eu vejo em Musicas Disponiveis “([^\"]*)”, de artista “([^\"]*)” com confirmação$/, async (titulo, artista) => {
        await (acharMusica(titulo, artista, true));
    });

    When(/^eu seleciono que tenho interesse em “([^\"]*)”, de artista “([^\"]*)”$/,async (titulo, artista) => {
        await (clicar(titulo, artista, false));
    });

    When(/^eu seleciono que não tenho interesse em “([^\"]*)”, de artista “([^\"]*)”$/,async (titulo, artista) => {
        await (clicar(titulo, artista, true));
    });
    
    Then(/^eu vejo em Musicas Disponiveis “([^\"]*)”, de artista “([^\"]*)” com confirmação$/, async (titulo, artista) => {
        await (acharMusica(titulo,artista, true));
    });

    Then(/^eu vejo em Musicas Disponiveis “([^\"]*)”, de artista “([^\"]*)” sem confirmação$/, async (titulo, artista) => {
        await (acharMusica(titulo,artista, false));
    });
})