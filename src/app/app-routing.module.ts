import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";


const filmRoutes: Routes = [
  { path: 'list',  component: ListaComponent }
];

@NgModule({
  
  imports: [RouterModule.forRoot(filmRoutes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
