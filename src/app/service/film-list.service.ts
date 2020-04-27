import { Injectable } from '@angular/core';
import { FilmItem } from '../models/film-item';

@Injectable({
  providedIn: 'root'
})
export class FilmListService {
  private filmListStored:FilmItem[]=[     
    { id:1, name:"Avatar", durataMinuti:120, genere:"azione", desc:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora.", favourited:false, show:true},
    { id:2, name:"American Pie", durataMinuti:100,genere:"commedia",desc:"American Pie is a 1999 American teen sex comedy film written by Adam Herz", favourited:false,show:true},
    { id:3, name:"Una notte da Leoni", durataMinuti:100, genere:"commedia",desc:"Una notte da leoni (The Hangover) è un film del 2009 diretto da Todd Phillips", favourited:false,show:true},
    { id:4, name:"Men in Black", durataMinuti:90, genere:"commedia",desc:"In popular culture and UFO conspiracy theories, men in black (MIB) are supposed men dressed in black suits who claim to be quasi-government agents who harass or threaten UFO witnesses to keep them quiet about what they have seen. It is sometimes implied that they may be aliens themselves.",favourited:false,show:true},
    { id:5, name:"Seven Sisters", durataMinuti:85, genere:"psicologico",desc:"The Seven Sisters are a series of chalk cliffs by the English Channel. They form part of the South Downs in East Sussex, between the towns of Seaford and Eastbourne in southern England. They are within the South Downs National Park which is bounded by the coast, the Cuckmere and the A259 road.", favourited:false,show:true},
    { id:6, name:"Toy Story", durataMinuti:80, genere:"famiglia",desc:"Toy Story is about the 'secret life of toys' when people are not around. When Buzz Lightyear, a space-ranger, takes Woody's place as Andy's favorite toy, Woody doesn't like the situation and gets into a fight with Buzz.", favourited:false,show:true},
    { id:7, name:"James Bond 007", durataMinuti:1337, genere:"spionaggio",desc:"Fleming's concept of Bond. The central figure in Ian Fleming's work is the fictional character of James Bond, an intelligence officer in the Secret Service. Bond is also known by his code number, 007, and was a Royal Naval Reserve Commander. ... In Bond, he created a Bulldog Drummond for the jet age.", favourited:false,show:true},
    { id:8, name:"Shape of Water", durataMinuti:250, genere:"psicologico",desc:"shape of water short desc", favourited:false,show:true},
    { id:9, name:"The Clone Wars", durataMinuti:140, genere:"scifi",desc:"swcw short desc", favourited:false,show:true},
  ];
item:FilmItem;
  getFilmList(): FilmItem[]{ //restituire tutti tranne i nascosti
    return this.filmListStored.filter(film => film.show ==true);
  }
  getFavouriteList():FilmItem[]{
    //restituisce preferiti
    return this.filmListStored.filter(film => film.favourited ==true);
  }
  getHiddenList():FilmItem[]{
    //restituisce nascosti
    return this.filmListStored.filter(film => film.show ==false);
  }
  setFavourite(id:number){
    //aggiunge ad una lista quelli preferiti id
      this.filmListStored.find(item =>item.id==id).favourited=true;
  }
  removeFavourite(id:number){
    //toglie da una lista quelli preferiti id
      this.filmListStored.find(item =>item.id==id).favourited=false;
  }
  setShowStatus(id:number){
    //mostra item id
      this.filmListStored.find(item =>item.id==id).show=true;
  }
  removeShowStatus(id:number){
    //nasconde item id
      this.filmListStored.find(item =>item.id==id).show=false;
  }
  setFilmList(filmList:FilmItem[]):void{
    this.filmListStored=filmList;
  }

  getFilmItem(id:number):FilmItem{
    return this.filmListStored.find(item => {
      return item.id===id;
    }
    );
  }
  constructor() { }
}
