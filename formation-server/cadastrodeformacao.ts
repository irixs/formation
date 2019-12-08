import { Formacao } from '../formation-common/formacao';

export class CadastroDeFormacao {
  formacoes: Formacao[] = [];

  cadastrar(formacao: Formacao): Formacao {
    var result = null;
    if (this.formacaoNaoCadastrada (formacao)) {
      result = new Formacao();
      result.copyFrom(formacao);
      this.formacoes.push(result);
    }
    return result;
  }

  formacaoNaoCadastrada(formacao: Formacao): boolean {
    return !this.formacoes.find(a => a.musica.titulo == formacao.musica.titulo && a.musica.artista == formacao.musica.artista);
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