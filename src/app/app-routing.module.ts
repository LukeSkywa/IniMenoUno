import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { MyRouteGuardService } from './services/guard/my-route-guard.service';
import { ProfiloComponent } from './profilo/profilo.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { ListaComponent } from "./components/lista/lista.component";
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

const filmRoutes: Routes = [
  { path: 'list', component: ListaComponent },
  { path: 'FilmDetail/:id', component: FilmDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }];



@NgModule({

  imports: [RouterModule.forRoot(filmRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
