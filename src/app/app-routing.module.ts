import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";
import { FilmDetailComponent } from './components/film-detail/film-detail.component';


const filmRoutes: Routes = [
  { path: 'list',  component: ListaComponent },
  { path: 'FilmDetail/:id',  component: FilmDetailComponent },
  { path: '', redirectTo: '/Login', pathMatch:'full' }];


@NgModule({
  
  imports: [RouterModule.forRoot(filmRoutes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
