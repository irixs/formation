import { Formacao } from '../formation-gui/src/app/formacao/formacao';
import { Musica } from '../formation-common/musica';


export class CadastroDeFormacao {
  formacoes: Formacao[] = [];
  constructor(){
    let f = new Formacao()
    let m = new Musica();
    m.titulo = "Let's Kill SSE";
    m.artista = "BlackPink";
    m.integrantes = ["Jisoo", "Jennie", "Lisa", "Rosé"];
    m.usuariosInteressados = ["Erick", "Íris", "Aline", "Beca", "Marconi"]
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