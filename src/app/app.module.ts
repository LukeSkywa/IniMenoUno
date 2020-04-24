import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { ListaComponent } from './components/lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    LogoutComponent,
    ListaComponent,
    FilmDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,  
    BrowserAnimationsModule,
    MatButtonToggleModule, 
    MatIconModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
