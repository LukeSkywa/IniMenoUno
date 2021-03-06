import { Injectable } from '@angular/core';
import { ListItem } from '../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  private profileList:ListItem[]=[
    {Id:1, Nome:"name", Cognome:"surname", Gender:"maschio", Email:"name@example.com", Telefono:null}
  ]

  getLista():ListItem[]{
    return this.profileList;
  }

  getProfile(id:number){
    return this.profileList.find(item=>{
      return item.Id === id;
    })
  }

  modifica(profilo){
    this.profileList.forEach(element => {
     element.Nome=profilo.nome;   
     element.Cognome=profilo.cognome;
     element.Gender=profilo.gender;   
     element.Email=profilo.email;
     element.Telefono=profilo.telefono;

    });
  }

  //funzione di debug da non considerare
  stampalista(){
    let temp:ListItem[];
    temp=this.getLista();
    temp.forEach(element => {
      console.log(element);
    });
  }

      


}
