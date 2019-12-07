import { Component, OnInit } from '@angular/core';
import { Musica } from './../../../../formation-common/musica';
import { MusicasService } from '../musica/musica.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musicas: Musica[] = [];
  interesses: boolean[] = [];

  constructor(private musicasService: MusicasService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.musicasService.getMusicas()
    .subscribe(
      as => { this.musicas = as;
      this.interesses = new Array<boolean>(this.musicas.length)
      this.atualizarMarcadores();
      },
      msg => { alert(msg.message); }
    );
  }

  atualizarMarcadores() {
    let index = 0;
    const cpf = localStorage.getItem('loginCpf');
    for (let musica of this.musicas) {
      this.interesses[index] = musica.usuariosInteressados.includes(cpf);
      index++;
    }
  }

  alterarInteresses(index: number) {
    if (this.interesses[index] == true) {
      this.musicas[index].usuariosInteressados.push(localStorage.getItem("loginCpf"));
      this.musicasService.atualizar(this.musicas[index]);
      const snackBar = this.snackBar.open(`Interesse em ${this.musicas[index].titulo} confirmado com sucesso!`, 'OK');
    } else {
      this.musicas[index].usuariosInteressados.splice(this.musicas[index].usuariosInteressados.findIndex(cpf => cpf == localStorage.getItem('loginCpf')), 1);
      this.musicasService.atualizar(this.musicas[index]);
      const snackBar = this.snackBar.open(`Interesse em ${this.musicas[index].titulo} negado com sucesso!`, 'OK');

    }
  }

}
