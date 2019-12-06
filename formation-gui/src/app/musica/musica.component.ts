import { Musica } from './../../../../formation-common/musica';
import { MusicasService } from './musica.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  stringIntegrantes: string;
  musica: Musica = new Musica();
  musicas: Musica[] = [];
  musicaDuplicada: boolean = false;
  selectedMusica: Musica;

  constructor(private musicasService: MusicasService) { }

  criarMusica(m: Musica): void {
    this.musica.integrantes = this.separaIntegrantes();
    this.musicasService.criar(m)
      .subscribe(
        ar => {
          if (ar) {
            this.musicas.push(ar);
            this.musica = new Musica();
            this.stringIntegrantes = "";
          } else {
            this.musicaDuplicada = true;
          }
        },
        msg => { alert(msg.message); }
      );
  }

  ngOnInit(): void {
    this.musicasService.getMusicas()
      .subscribe(
        as => { this.musicas = as; },
        msg => { alert(msg.message); }
      );
  }

  onSelect(musica: Musica): void {
    this.selectedMusica = musica;
  }

  separaIntegrantes() { 
    var arrayIntegrantes = this.stringIntegrantes.split(",")
    console.log(arrayIntegrantes)
    return arrayIntegrantes;
 }

}
