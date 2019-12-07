import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from './usuario.service';
import { MusicasService } from './musica/musica.service';
import { HttpClientModule } from '@angular/common/http';
import { MusicaComponent } from './musica/musica.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { MusicaDetalhesComponent } from './musica-detalhes/musica-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensagensComponent,
    AdministradorComponent,
    LoginComponent,
    MusicaComponent,
    FormacaoComponent,
    MusicaDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [UsuarioService, MusicasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
