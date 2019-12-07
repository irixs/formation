import { Musica } from '../../../../formation-common/musica';

export class Formacao {
    musica: Musica;
    associacao: Map<String,String[]> [];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.musica = new Musica();
      this.associacao = [];
    }
  
    clone(): Formacao {
      var formacao: Formacao = new Formacao();
      formacao.copyFrom(this);
      return formacao;
    }
  
    copyFrom(from: Formacao): void {
      this.musica = from.musica;
      this.associacao = from.associacao;
    }

  }