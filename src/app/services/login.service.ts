import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'assets/usuario.json';
  constructor(private http:HttpClient) { }


  login(){
   return this.http.get(this.url);
  }
}
