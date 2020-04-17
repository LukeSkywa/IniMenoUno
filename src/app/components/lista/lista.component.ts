import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilmItem } from 'src/app/models/film-item';
import { FilmListService } from 'src/app/service/film-list.service';
import { GeneriService } from 'src/app/service/generi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  fontStyle:string="bold";
  messaggio: string;
  @Output()
  showDetail: EventEmitter<number>= new EventEmitter();

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
