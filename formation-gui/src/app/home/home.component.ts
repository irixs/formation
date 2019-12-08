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
  cpf: string;

  constructor(private musicasService: MusicasService, private snackBar: MatSnackBar) { this.cpf = localStorage.getItem('loginCpf');}

  atualizarMarcadores() {
    let index = 0;
    for (let musica of this.musicas) {
      this.interesses[index] = musica.usuariosInteressados.includes(this.cpf);
      index++;
    }
  }

  alterarInteresses(index: number) {
    if (this.interesses[index] == true) {
      this.musicas[index].usuariosInteressados.push(this.cpf);
      this.musicasService.atualizar(this.musicas[index]).subscribe(
        (a) => { if (a == null) alert("Opa! Não consegui falar com o servidor"); },
        (msg) => { alert(msg.message); }
     );
      const snackBar = this.snackBar.open(`Interesse em ${this.musicas[index].titulo} confirmado com sucesso!`, 'OK');
    } 
    else {
      this.musicas[index].usuariosInteressados.splice(this.musicas[index].usuariosInteressados.findIndex(cpf => cpf == localStorage.getItem('loginCpf')), 1);
      this.musicasService.atualizar(this.musicas[index]).subscribe(
        (a) => { if (a == null) alert("Opa! Não consegui falar com o servidor"); },
        (msg) => { alert(msg.message); }
     );
      const snackBar = this.snackBar.open(`Interesse em ${this.musicas[index].titulo} negado com sucesso!`, 'OK');
    }
  }

  ngOnInit() {
    this.musicasService.getMusicas()
    .subscribe(
      as => { this.musicas = as;
      this.interesses = new Array<boolean>(this.musicas.length);
      this.atualizarMarcadores();
      },
      msg => { alert(msg.message); }
    );
  }
}