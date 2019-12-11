import { Component, OnInit } from '@angular/core';
import { Musica } from './../../../../formation-common/musica';
import { MusicasService } from '../musica/musica.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Usuario } from '../../../../formation-common/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musicas: Musica[] = [];
  usuarios: Usuario[];
  interesses: boolean[] = [];
  usuario: Usuario;
  cpf: string;
  
  constructor(private musicasService: MusicasService, private snackBar: MatSnackBar, private usuarioService: UsuarioService) { this.cpf = localStorage.getItem('loginCpf'); }

  atualizarMarcadores() {
    let index = 0;
    for (let musica of this.musicas) {
      this.interesses[index] = !!musica.usuariosInteressados.find(usuario => usuario.cpf == this.cpf);
      index++;
    }
  }

  alterarInteresses(index: number) {
    if (this.interesses[index] == true) {
      this.musicas[index].usuariosInteressados.push(this.usuario);
      this.musicasService.atualizar(this.musicas[index]).subscribe(
        (a) => { if (a == null) alert("Opa! Não consegui falar com o servidor"); },
        (msg) => { alert(msg.message); }
     );
      const snackBar = this.snackBar.open(`Interesse em ${this.musicas[index].titulo} confirmado com sucesso!`, 'OK');
    } 
    else {
      this.musicas[index].usuariosInteressados.splice(this.musicas[index].usuariosInteressados.findIndex(usuario => usuario.cpf == this.cpf), 1);
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

    this.usuarioService.getUsuarios()
    .subscribe(
      as => { this.usuarios = as;
      this.usuario = this.usuarios.find(usuario => usuario.cpf === this.cpf); },
      msg => { alert(msg.message); }
    );
  }
}