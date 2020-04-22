import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfiloComponent } from './profilo/profilo.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    ProfiloComponent,
    EditProfileComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
