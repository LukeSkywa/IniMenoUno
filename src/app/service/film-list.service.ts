import { Injectable } from '@angular/core';
import { FilmItem } from '../models/film-item';

@Injectable({
  providedIn: 'root'
})
export class FilmListService {
  private filmListStored:FilmItem[]=[     
    { id:1, name:"Avatar", durataMinuti:120, genere:"azione", favourited:false, show:true},
    { id:2, name:"American Pie", durataMinuti:100,genere:"commedia", favourited:false,show:true},
    { id:3, name:"Una notte da Leoni", durataMinuti:100, genere:"commedia", favourited:false,show:true},
    { id:4, name:"Man in Black", durataMinuti:90, genere:"commedia",favourited:false,show:true},
    { id:5, name:"Seven Sisters", durataMinuti:85, genere:"psicologico", favourited:false,show:true},
    { id:6, name:"Toy Story", durataMinuti:80, genere:"famiglia", favourited:false,show:true},
    { id:7, name:"James Bond 007", durataMinuti:1337, genere:"spionaggio", favourited:false,show:true},
    { id:8, name:"Shape of Water", durataMinuti:250, genere:"psicologico", favourited:false,show:true},
    { id:9, name:"The Clone Wars", durataMinuti:140, genere:"scifi", favourited:false,show:true},
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
