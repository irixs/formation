import { Musica } from '../formation-common/musica';

export class CadastroDeMusicas {
    musicas: Musica[] = [];

     atualizar(musica: Musica): Musica {
        console.log("chega aqui");
      var result: Musica = this.musicas.find(a => ((a.titulo == musica.titulo) && (a.artista == musica.artista)));
      if (result) result.copyFrom(musica);
      return result;
    }
 
     getMusicas(): Musica[] {
      return this.musicas;
    }
 }
 