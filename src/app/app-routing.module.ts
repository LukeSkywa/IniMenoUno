import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LogoutComponent } from './logout/logout.component';
import { ListaComponent } from "./components/lista/lista.component";
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

const filmRoutes: Routes = [
  { path: 'list', component: ListaComponent },
  { path: 'FilmDetail/:id', component: FilmDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }];



@NgModule({

  imports: [RouterModule.forRoot(filmRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
