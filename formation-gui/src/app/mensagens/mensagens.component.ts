import { Component, OnInit } from '@angular/core';
import { Formacao } from '../../../../formation-common/formacao';
import { FormacaoService } from '../formacao/formacao.service';
import { Usuario } from '../../../../formation-common/usuario';
import { UsuarioService } from '../usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {

  formacoes: Formacao[] = [];
  filtro: Formacao[] = [];
  indices: number[] = [];

  usuarios: Usuario[] = [];

  constructor(private formacaoService: FormacaoService, private snackBar: MatSnackBar, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.formacaoService.getFormacoes().subscribe(formacoes => {
      this.formacoes = formacoes;
      for (let formacao of formacoes) {
        let indice = formacao.usuarios.findIndex(usuario => usuario.cpf === localStorage.getItem('loginCpf'));
        if (indice !== -1) {
          this.indices.push(indice);
          this.filtro.push(formacao);
        }
      }
    });
    this.usuarioService.getUsuarios()
    .subscribe(
      as => { this.usuarios = as; },
      msg => { alert(msg.message); }
    );
  }

  confirmarFormacao() {
    const usuario = this.usuarios.find(usuario => usuario.cpf === localStorage.getItem('loginCpf'));
    usuario.participacoes = usuario.participacoes + 1;
    this.usuarioService.atualizar(usuario).subscribe(
      (a) => { if (a !== null) this.snackBar.open('Confirmação realizada com sucesso!', 'OK'); }
    );
  }

  cancelarFormacao() {
    const snackBar = this.snackBar.open('Cancelamento realizado com sucesso!', 'OK');
  }

}
