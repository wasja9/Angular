
import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';

import {User} from "../interfaces";
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators'
import {map} from "rxjs/internal/operators";

//@Injectable

//providedIn: 'root';
export class AuthService{

 private token = null;

  constructor(private http: HttpClient){

  }

  register() {}

  login(user:User): Observable<{token:string}>{
   return this.http.post<{token:string}>('/api/auth/login',user)
     .pipe(

       tap(
      // map(
         ({token})=>{
           localStorage.setItem('auth-token', token);
           this.setToken(token);

         }
       )
     )

  }
  setToken(token:string){
    this.token=token;
  }

  getToken():string{
    return this.token;
  }

  isAuthenticated():boolean{
    return !!this.token;
  }

  logout(){
   this.setToken(null);
   localStorage.clear();
  }

}
