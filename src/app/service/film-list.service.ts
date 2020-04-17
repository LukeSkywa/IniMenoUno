import { Injectable } from '@angular/core';
import { FilmItem } from '../models/film-item';

@Injectable({
  providedIn: 'root'
})
export class FilmListService {
  private filmListStored:FilmItem[]=[     
    { id:1, name:"Avatar", durataMinuti:120, genere:"azione", favourited:false},
    { id:2, name:"American Pie", durataMinuti:120,genere:"commedia", favourited:false},
    { id:3, name:"Una notte da Leoni", durataMinuti:120, genere:"commedia", favourited:false},
    { id:4, name:"Man in Black", durataMinuti:120, genere:"commedia",favourited:false},
    { id:5, name:"Seven Sisters", durataMinuti:120, genere:"psicologico", favourited:false},
  ];

  getFilmList(): FilmItem[]{
    return this.filmListStored;
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
