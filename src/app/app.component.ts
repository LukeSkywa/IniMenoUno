import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
   trigger('fade', [
    transition('login <=> registrazione', [
      // the "in" style determines the "resting" state of the element when it is visible.

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(.3,style({opacity:1}) )
      ]),
    ])

  ])
  
]
})
export class AppComponent {
  title = 'IniMenoUno';
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
}
