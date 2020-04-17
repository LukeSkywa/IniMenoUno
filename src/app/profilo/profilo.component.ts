import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  modifica(){
    this.router.navigate(['/edit-profile']);
  }

  ngOnInit(): void {
  }

}
