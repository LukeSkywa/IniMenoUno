import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListItem } from '../models/profile.interface';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  profileList:ListItem[]=[];

  constructor(private profileService: ProfileService, private router: Router) { 
    this.profileList=this.profileService.getLista();
  }


  logout(){
    sessionStorage.removeItem("login"); 
    this.router.navigateByUrl("/login");
  }
  modifica(){
    this.router.navigate(['/edit-profile']);
  }

  ngOnInit(): void {
  }

}
