import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedform:FormGroup;

  constructor(private router: Router, private http:HttpService, private fb: FormBuilder) {
    this.feedform = this.fb.group({
      nome:'',
      cognome:'',
      gender:'',
      email:'',
      telefono:'',
      note:''
   })
  }

  
  logout(){
    sessionStorage.removeItem("login"); 
    this.router.navigateByUrl("/login");
  }
  onSubmit(contactForm: FormGroup) {
    if (contactForm.valid) {
      const email = contactForm.value;
      console.log(email);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.invia('https://formspree.io/mgelgdzr',
        { name: email.nome, replyto: email.email, note: email.note },
        { 'headers': headers }).subscribe(
          response => {
            window.alert("Grazie per il suo aiuto!");
            console.log(response);
          }
        );
    }
  }

  ngOnInit(): void {
  }

}
