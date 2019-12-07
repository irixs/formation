import { Musica } from './../formation-common/musica';

export class CadastroDeMusicas {
   musicas: Musica[] = [];

    cadastrar(musica: Musica): Musica {
     var result = null;
     if ((this.MusicaNaoCadastrada(musica) && this.idNaoCadastrado(musica))) {
       result = new Musica();
       result.copyFrom(musica);
       this.musicas.push(result);
     }
     return result;
   }

    MusicaNaoCadastrada(musica: Musica): boolean {
      // verifica se já existe uma música com esse título e artista
      return !this.musicas.find(a => ((a.titulo == musica.titulo) && (a.artista == musica.artista)));
   }

    idNaoCadastrado(musica: Musica): boolean {
     // verifica se já existe uma música com id
     return !this.musicas.find(a => (a.id == musica.id));
 }

    atualizar(musica: Musica): Musica {
     var result: Musica = this.musicas.find(a => ((a.titulo == musica.titulo) && (a.artista == musica.artista)));
     if (result) result.copyFrom(musica);
     return result;
   }

    getMusicas(): Musica[] {
     return this.musicas;
   }
}
