import { Formacao } from '../../../../formation-common/formacao';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormacaoService } from './formacao.service'
import { MusicasService } from '../musica/musica.service';
import { Usuario } from '../../../../formation-common/usuario';


@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  nomeDoFormControl = new FormControl();
  associacoesDeFormacoes = [];

  formacao : Formacao = new Formacao();
  formacoes : Formacao[] = [];
  formacaoDuplicada : boolean = false;

  constructor(private serviceF : FormacaoService, private serviceM : MusicasService) { }
  
  submeter () {

    for (let i =0; i<this.associacoesDeFormacoes.length; i++){ // para cada formacao
      let associacoesIntegrantes = [];
      
      for (let j=0; j<this.associacoesDeFormacoes[i].length; j++){ // para cada integrante da musica da formacao
        let usuariosMarcados : Usuario [] = []
        for (let k=0; k<this.associacoesDeFormacoes[i][j].length; k++){
          usuariosMarcados.push(this.encontrarUsuarioMarcado(this.formacoes[i], this.associacoesDeFormacoes[i][j][k]))
        }
        this.formacoes[i].associacao.set(this.formacoes[i].musica.integrantes[j], usuariosMarcados);
      }

      this.serviceF.atualizar(this.formacoes[i])
    }
  }




  encontrarUsuarioMarcado(formacao: Formacao, nome:string) : Usuario{
    formacao.musica.usuariosInteressados.forEach(usuario => {
      if (usuario.nome == nome){
        return usuario;
      }
    });
      return (null)
  }
  
  ngOnInit() {

    this.serviceM.getMusicas()
    .subscribe(
      musicas => 
      { 
        musicas.forEach(musica => {
          this.formacao.musica = musica;
          this.formacao.iniciarAssociacao();
          this.serviceF.criar(this.formacao)
          .subscribe(
            ar => {
              if (ar) {
                this.formacoes.push(ar);
                this.formacao = new Formacao();
              } else {
                this.formacaoDuplicada = true;
              }
            },
            msg => { alert(msg.message); }
          );
      });  

    // - - - - - PASSO I : PUXAR FORMACOES PRESENTES NO SERVIDOR, COLOCANDO EM UM ARRAY LOCAL - - - - - - 
    this.serviceF.getFormacoes()
    .subscribe(
      formacoes => {
        this.formacoes = formacoes

      // - - - - - PASSO II : criar matriz de FormControl para cada integrante, de cada formacao - - - - - - 
      // é o modo como informações são extraidas do elemento html de selecao - - - -  
        this.formacoes.forEach(f => {
          let a = []
          f.musica.integrantes.forEach(i => {
            a.push(new FormControl())
          })
          this.associacoesDeFormacoes.push(a);
        })
      })
  }
  )}

}