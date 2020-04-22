import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { MyRouteGuardService } from './services/guard/my-route-guard.service';
import { ProfiloComponent } from './profilo/profilo.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
