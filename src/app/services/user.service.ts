import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string ='http://127.0.0.1:7777/'

  constructor(private http:HttpClient, private router:Router) { }

  register(User:User){
    return this.http.post(this.baseUrl+'usuarios',User)
  }

  login(User:User){
    return this.http.post(this.baseUrl+'login',User)
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token_value');
    this.router.navigate(['/login']);
    //window.location.reload();
  }

  get getUsername(){
    var retrievedObject = JSON.parse(localStorage.getItem('user')??' ');
    
    if (retrievedObject != ' ') {
      var d : User = retrievedObject;
      return d.seudonimo;
    }
    return 'No Logeado'
  }

  
  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }

}
