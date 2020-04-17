import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneriService {

  generi: { id: number, genere: string }[] = [
    {id:1, genere:'action'},
    {id:2, genere:'fps'},
  ];
  constructor() { }

  getList(){
    return this.generi;
  }
}
