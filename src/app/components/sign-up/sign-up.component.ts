import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  TokenService:string;//="3TQT2iy1Gl";

  login: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  constructor(private http:HttpClient) { }



  ADD_User() {
    if (localStorage.getItem('Auth-Token') !== null) {
      this.TokenService=localStorage.getItem('Auth-Token');//Инициализация токена из сессии
    }
    else {this.TokenService="";}


    console.log(this.login+":"+this.password+":"+this.firstName+":"+this.lastName);

    this.http.post('http://localhost:8083/users/?token='+this.TokenService, {"login":this.login,"password":this.password,"firstName":this.firstName,"lastName":this.lastName})
      .subscribe(result => {
        alert(result);
      }, error => {

        alert(error);
      });


  }

}
