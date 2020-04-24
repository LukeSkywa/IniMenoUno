import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  invia(url: string, body: { name: any; replyto: any; note: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {
    return this.http.post(url,body,arg2); 
  }

}
