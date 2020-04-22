import { Component, OnInit } from '@angular/core';
import { FilmItem } from 'src/app/models/film-item';
import { FilmListService } from 'src/app/service/film-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  id:number;
  film:FilmItem;
  sub: any;
  genereGioco:string;

  constructor(private filmListService: FilmListService,private route: ActivatedRoute,){
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
    this.film=this.filmListService.getFilmItem(this.id);
  }
}
