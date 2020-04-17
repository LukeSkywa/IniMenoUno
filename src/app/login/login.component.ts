import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private listaFilm: LoginService,private router: Router) {
  }

 ngOnInit(): void {
 }

 login(username:string, password:string){
   
   this.listaFilm.eseguiLogin(username,password);
   
 }

 loginS(username:string, password:string){
   //nei pulsanti/altro metodo
   sessionStorage.setItem('user', username);
   sessionStorage.setItem('password', password);

   this.listaFilm.eseguiLoginS();
 }
 registrati(){
   this.router.navigateByUrl("/registrazione");
 }

}
