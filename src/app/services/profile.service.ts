import { Injectable } from '@angular/core';
import { ListItem } from '../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  private profileList:ListItem[]=[
    {Id:1, Nome:"aa", Cognome:"bb",Gender:"M", Email:"aa@mm.com", Telefono:3333665986}
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
