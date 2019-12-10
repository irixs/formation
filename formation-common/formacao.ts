import { Musica } from './musica';
import { Usuario } from './usuario';

export class Formacao {
    musica: Musica;
    associacao: Map<String,Usuario[]>;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.musica = new Musica();
      this.associacao = new Map();
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

    iniciarAssociacao () {
      let mapParaInicializacao = new Map();
      this.musica.integrantes.forEach(integrante => {
        let arrayUsuariosAssociados : Usuario[] = [];
        mapParaInicializacao.set(integrante, arrayUsuariosAssociados);
      });
      this.associacao = mapParaInicializacao;
    }

  }