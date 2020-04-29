import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ListItem } from '../models/profile.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  nome:String="nome";
  profileform:FormGroup;
  attivato:boolean;
  profileList: ListItem[];
  profilo:ListItem;
  
  constructor(private profileService: ProfileService, private router: Router, private fb: FormBuilder) { 
    this.profileList=this.profileService.getLista();

    this.profileform=this.fb.group({

      id: '',
      nome:'',
      cognome: '',
      gender: '',
      email: '',
      telefono: '',
      
    });

  }

  //inizializza falso 
  ngOnInit(): void {
    this.showForm(1);
  }
  
  //visualizzare la form riempita
  showForm(id:number){
    this.profilo=this.profileService.getProfile(Number(id));
    this.modifica(this.profilo);
  }

  //riempio form
  modifica(profilo:ListItem){
    this.profileform=this.fb.group({
      id: profilo.Id,
      nome: profilo.Nome,
      cognome: profilo.Cognome,
      gender: profilo.Gender,
      email: profilo.Email,
      telefono: profilo.Telefono,
    });
  }




  //torna al profilo
  back(){
    this.router.navigateByUrl("/profilo");
  }

  //quando clicchi invia e aggiorna
  onSubmit(form){
    this.profileService.modifica(form);
    this.profileList=this.profileService.getLista();
    window.alert("modifica effettuata");
    this.router.navigateByUrl("/profilo");
    
  }
  

}
