import { Component, OnInit, EventEmitter, Output, MissingTranslationStrategy } from '@angular/core';
import { FilmItem } from 'src/app/models/film-item';
import { FilmListService } from 'src/app/service/film-list.service';
import { GeneriService } from 'src/app/service/generi.service';


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
  resetcheck: boolean=true  ;
  favouritecheck: boolean=false;
  hidecheck:boolean=false;
  favouritedlist:FilmItem[]=[];
  @Output()
  showDetail: EventEmitter<number>= new EventEmitter();
  @Output() 
  makeFavourite: EventEmitter<number> = new EventEmitter();
  hiddenList:FilmItem[]=[];
  //genereId:string='fps';
  genereId:number=0;
searchword:string;
  filmList:FilmItem[]=[];
  //gameFilter: GameItem[]=[];
  generi: { id: number, genere: string }[];
  
  constructor(private filmListService: FilmListService, private listGenere: GeneriService) {
    this.filmList=filmListService.getFilmList();
    this.generi=listGenere.getList();
    this.favouritedlist=filmListService.getFilmList();
   }

  ngOnInit(): void {
  }

  dettaglio(id: number){
    this.showDetail.emit(id);
  }
  setFavourite(id:number){
    this.filmListService.setFavourite(id);
  }
  removeFavourite(id:number){
    this.filmListService.removeFavourite(id);
  }
  setShowStatus(id:number){
    this.filmListService.setShowStatus(id);
  }
  removeShowStatus(id:number){
    this.filmListService.removeShowStatus(id);
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

  resetList()
  {
    this.filmList=this.filmListService.getFilmList();
    
    this.resetcheck=true;
    this.favouritecheck=false;
    this.hidecheck=false;
  } 
  favouriteList(){
    this.filmList=this.filmListService.getFavouriteList();
    this.resetcheck=false;
    this.favouritecheck=true;
    this.hidecheck=false;
  }
  showHidden(){
    this.filmList=this.filmListService.getHiddenList();
    this.resetcheck=false;
    this.favouritecheck=false;
    this.hidecheck=true;
  }
  //this.searcharray = this.filmListService.getFilmList();
  searcharray:FilmItem[]=[];
  searchThis(searchword:string){
    this.searcharray=this.filmListService.getFilmList();
    if (searchword){
    this.searcharray = this.searcharray.filter(function (ele, i, array) {
      let arrayelement = ele.name.toLowerCase();
      return arrayelement.includes(searchword);
      
    });console.log(this.searcharray);
  }
  else
  {
    this.filmList=this.filmListService.getFilmList();
    console.log(this.searcharray);
  }
  this.filmList=this.searcharray;
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
