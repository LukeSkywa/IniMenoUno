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
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './services/guard/login.guard';

const filmRoutes: Routes = [
  { path: 'list', component: ListaComponent,  canActivate: [MyRouteGuardService] },
  { path: 'FilmDetail/:id', component: FilmDetailComponent , canActivate: [MyRouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent , canActivate: [MyRouteGuardService]},
  { path: 'profilo', component: ProfiloComponent , canActivate: [MyRouteGuardService]},
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [MyRouteGuardService] },
  { path: 'feedback', component: FeedbackComponent , canActivate: [MyRouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [MyRouteGuardService] },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }];
  


@NgModule({

  imports: [RouterModule.forRoot(filmRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
