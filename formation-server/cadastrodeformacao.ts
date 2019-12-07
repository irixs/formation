import { Formacao } from '../formation-common/formacao';
import { Musica } from '../formation-common/musica';
import { Usuario } from '../formation-common/usuario';


export class CadastroDeFormacao {
  formacoes: Formacao[] = [];
  constructor(){
    let f = new Formacao()
    let m = new Musica();
    m.titulo = "Let's Kill SSE";
    m.artista = "BlackPink";
    m.integrantes = ["Jisoo", "Jennie", "Lisa", "Rosé"];

    let usuario1 = new Usuario();
    usuario1.nome = "Erick";
    usuario1.participacoes = 2;

    let usuario2 = new Usuario();
    usuario2.nome = "Íris";
    usuario2.participacoes = 3;

    let usuario3 = new Usuario();
    usuario3.nome = "Aline"

    let usuario4 = new Usuario();
    usuario4.nome = "Beca"

    let usuario5 = new Usuario();
    usuario5.nome = "Marconi"

    m.usuariosInteressados = [usuario1, usuario2, usuario3, usuario4, usuario5]
    f.musica = m;
    f.associacao = [];
    this.formacoes.push(f);
  }

  cadastrar(formacao: Formacao): Formacao {
    var result = null;
    if (this.formacaoNaoCadastrada(formacao.musica.titulo, formacao.musica.artista)) {
      result = new Formacao();
      result.copyFrom(formacao);
      this.formacoes.push(result);
    }
    return result;
  }


  formacaoNaoCadastrada(titulo: string, artista: string): boolean {
    return !this.formacoes.find(a => a.musica.titulo == titulo && a.musica.artista == artista);
  }

  atualizar(formacao: Formacao): Formacao {
    var result: Formacao = this.formacoes.find(a => a.musica.titulo == formacao.musica.titulo && a.musica.artista == formacao.musica.artista);
    if (result) result.copyFrom(formacao);
    return result;
  }

  getFormacoes(): Formacao[] {
    return this.formacoes;
  }
}