import { Component, OnInit, EventEmitter, Output, MissingTranslationStrategy } from '@angular/core';
import { FilmItem } from 'src/app/models/film-item';
import { FilmListService } from 'src/app/service/film-list.service';
import { GeneriService } from 'src/app/service/generi.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  disabledvariable:number;
  showmore:number= 5;
  fontStyle:string="bold";
  messaggio: string;
  @Output()
  showDetail: EventEmitter<number>= new EventEmitter();
  hiddenList:FilmItem[]=[];
  //genereId:string='fps';
  genereId:number=0;

  filmList:FilmItem[]=[];
  //gameFilter: GameItem[]=[];
  generi: { id: number, genere: string }[];
  
  constructor(private filmListService: FilmListService, private listGenere: GeneriService) {
    this.filmList=filmListService.getFilmList();
    this.generi=listGenere.getList();
   }

  ngOnInit(): void {
  }

  dettaglio(id: number){
    this.showDetail.emit(id);
  }

  showEdit(){
    if(sessionStorage.getItem('login')==="admin")
      return true;
    return false;
  }
  showMoreItems()
  {
     this.showmore = Number(this.showmore) + 5;        
  }
  disablebutton():boolean { 

    return 
  }
  resetList()
  {
    this.filmList=this.filmListService.getFilmList();
    
  }
  favouriteList(){
    this.filmList=this.filmList.filter(film => film.favourited ==true);
  }
  showHidden(){
    this.filmList.forEach(film => {
      film.show=!film.show;
    });
  }
  /*ricerca(id:number){
    //this.genereId=this.listGenere.associaDescrizione(id);
    this.genereId=id;
    this.select=true;
    let cont=0;
    if(id==0){
      this.gameFilter=this.gameList;
      return;
    }
    for(let item of this.gameList)
      if(item.genere==id){
        this.gameFilter.push(item);
        this.messaggio=null;
        cont++;
      }
    if(cont==0)
      this.messaggio='ricerca vuota';
  }

  reset(){
    this.select=false;
  }*/
}
