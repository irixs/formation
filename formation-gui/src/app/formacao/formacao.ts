import { Musica } from '../../../../formation-common/musica';

export class Formacao {
    musica: Musica;
    associacao: Map<string,string>;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.musica.clean();
      this.associacao.clear()
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