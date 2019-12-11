import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Usuario } from '../../../formation-common/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
      title = 'formation-gui';
      navPages: any[];
      activePageIndex = 0;
      loginData = localStorage.getItem('loginCpf');

      usuarios: Usuario[];
      usuario: Usuario;

      constructor(private router: Router, private snackBar: MatSnackBar, private usuarioService: UsuarioService) {
        let i = 0;
        this.navPages = router.config
        .filter( item => item.data != null && item.data.label != null )
        .map( item => {
          return {
            label: item.data.label,
            link: `/${item.path}`,
            index: i++
          };
        });
        console.log(this.navPages);
      }

    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activePageIndex = this.navPages.indexOf(this.navPages.find(tab => tab.link === '.' + this.router.url));
      });
      this.usuarioService.getUsuarios()
      .subscribe(
        as => { this.usuarios = as;
        this.usuario = this.usuarios.find(usuario => usuario.cpf === localStorage.getItem('loginCpf')); },
        msg => { alert(msg.message); }
      );
    }

    fazerLogout() {
      localStorage.removeItem('loginCpf');
      const snackBar = this.snackBar.open('Logout realizado com sucesso!', 'OK');
      setTimeout(() => {
        document.location.assign(this.router.url);
          },
          1000);
    }
}
