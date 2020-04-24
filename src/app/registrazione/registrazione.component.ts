import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  signform:FormGroup;

  constructor(private datiUtenti:LoginService ,private fb: FormBuilder,private router: Router) {

    this.signform = this.fb.group({
      username:'',
      password:''
    });

   }

  ngOnInit(): void {
  }

  
  back(){
    this.router.navigateByUrl("/login");
  }
  onSubmit(user){
    this.datiUtenti.add(user);
    this.router.navigateByUrl("/login");
  }
  

}
