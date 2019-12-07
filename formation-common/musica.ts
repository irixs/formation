export class Musica {
    titulo: string;
    artista: string;
    integrantes: String [];
    usuariosInteressados: String [];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.titulo = "";
      this.artista = "";
      this.integrantes = [];
      this.usuariosInteressados = [];

    }
  
    clone(): Musica {
      var musica: Musica = new Musica();
      musica.copyFrom(this);
      return musica;
    }
  
    copyFrom(from: Musica): void {
      this.titulo = from.titulo;
      this.artista = from.artista;
      this.integrantes = from.integrantes;
      this.usuariosInteressados = from.usuariosInteressados;
    }

  }