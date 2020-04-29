import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  private filmList:User[]=[
    {username:"123",password:"123",admin:true},
    {username:"aaa",password:"aaa",admin:false},
  ]
  
  constructor(private router: Router,private snackbar:MatSnackBar){

  }

  accesso(username:string,password:string):boolean{

    let controllo=false;
    
    this.filmList.forEach(element => {
      if(element.username===username && element.password===password){
        //gestione admin
        element.admin === true ? sessionStorage.setItem('privilege','admin') : sessionStorage.setItem('privilege','user')
        
        controllo=true;
      }
    });
    
    return controllo;  
  }

  eseguiLogin(username:string,password:string){

    if(this.accesso(username,password)){
      //se giusto memorizza con pass
      sessionStorage.setItem('user', username);
      sessionStorage.setItem("password",password);  
      sessionStorage.setItem("login","login");
      this.router.navigateByUrl("/home");
    }
    else {
      let snackBarRef = this.snackbar.open('Nome o Password errati');
    }
  }
  //con sessioni
  eseguiLoginS(){
   let username=sessionStorage.getItem('user');
   let password=sessionStorage.getItem('password');
    
    if(this.accesso(username,password)){
      this.router.navigateByUrl("/home");
    }
  }
  
  //registrazione
  add(user){
    console.log(user.password);
    user.admin=false;
    this.filmList.push(user);
  }

  
}
