import { CadastroDeMusicas } from './../cadastrodemusicas';
import { Musica } from './../../formation-common/musica';

describe("O cadastro de musicas", () => {
  var cadastro: CadastroDeMusicas;

  function cadastrarMusica(titulo:string, artista:string, integrantes: String[],id:number) {
    var musica: Musica = new Musica();
    musica.titulo = titulo;
    musica.artista = artista;
    musica.integrantes = integrantes;
    musica.id = id;
    cadastro.cadastrar(musica);
  }

  function expectSoUmaMusica() {
    expect(cadastro.getMusicas().length).toBe(1);
    var musica = cadastro.getMusicas()[0];
    return musica;
  }

  beforeEach(() => cadastro = new CadastroDeMusicas())

  it("é inicialmente vazio", () => {
    expect(cadastro.getMusicas().length).toBe(0);
  })

  it("cadastra musicas corretamente", () => {
    cadastrarMusica("Bloom Bloom","The Boyz",["Hwall","Eric","Sunwoo"],1);

    var musica = expectSoUmaMusica();
    expect(musica.titulo).toBe("Bloom Bloom");
    expect(musica.artista).toBe("The Boyz");
    expect(musica.integrantes.length).toBe(3);
    expect(musica.id).toBe(1);
  })

  it("não aceita musica com ID duplicado", () => {
    cadastrarMusica("Bloom Bloom","The Boyz",["Hwall","Eric","Sunwoo"],1);
    cadastrarMusica("Rodeo","Monsta X",["I.M","Joohoney"],1);

    var musica = expectSoUmaMusica();
    expect(musica.titulo).toBe("Bloom Bloom");
    expect(musica.artista).toBe("The Boyz");
  })

  it("não aceita musica com nome e artista duplicado", () => {
    cadastrarMusica("Bloom Bloom","The Boyz",["Hwall","Eric","Sunwoo"],1);
    cadastrarMusica("Bloom Bloom","The Boyz",["Sunwoo"],2);

    var musica = expectSoUmaMusica();
    expect(musica.id).toBe(1);
  })

})