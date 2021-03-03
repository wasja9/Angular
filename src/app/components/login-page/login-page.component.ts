import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
//import {AuthService} from "../shared/services/auth.services";
import {Subscription, Observable} from "rxjs";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  TokenService:string="NWn7lcGfSv";
  DT:any;
  id: string = "";
  login: string = "";
  ChekIn: boolean = false;

  user:string;
  Username: string = "";
  Password: string = "";



  constructor(private http:HttpClient) { }
  // console.log("ADD2: ");

  log_IN() {//Регистрация пользователя
//Формируем Post запрос к серверу  на логин
   // this.http.post('http://localhost:8083/login/?token='+this.TokenService, {"login":this.Username,"password":this.Password})
    this.http.post('http://localhost:8083/login', {"login":this.Username,"password":this.Password})

      .subscribe(result => {
        //alert(result);//Окошко с подтверждением запроса на продолженеи действия
        //console.log(result);//
        console.log("Auth-Token=" + result["value"]);//Вывод в консоль токена
        //document.cookie = "Auth-Token=" + result["value"];//Создание куки с токеном
        localStorage.setItem('Auth-Token',result["value"]);//Создане localStorage(сессии) с токеном
        //console.log("11Auth-TokenlocalStorege=" +localStorage.getItem('Auth-Token'));//Вывод в консоль токена из сессии
        //localStorage.removeItem('Auth-Token');//Удаление сессии
      }, error => {
        alert(error);
        localStorage.removeItem('Auth-Token');//Удаление сессии
      });
     console.log("ADD1: ");

  }

  log_OUT() {//Выход из пользователя
    localStorage.removeItem('Auth-Token');//Удаление сессии
  }

}

//???????????????????Фсе проверил, работает????????????????????????????????????????????
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//============Выводим данные БД и сравиниваем их с данными формы=======================
//=========получаем рабочую форму для регистрации данных===============================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
 TokenService:string="jYfI16NSpM";
 DT:any;
 id: string = "";
 login: string = "";
 ChekIn: boolean = false;
handleLogin() {
  this.ChekIn=false;
  this.http.get('http://localhost:8083/users/?token='+this.TokenService)
    .subscribe(data=>{
      console.log(data);
      this.DT=data;
      //Вывод значений данных из двумерного массива DT в консоль
      for (let i = 0; i < this.DT.length; i++) {
        if (this.id == this.DT[i]["id"] && this.login == this.DT[i]["login"]) {
          console.log("ID: "+this.DT[i]["id"]+"="+this.id);
          console.log("Login: "+ this.DT[i]["login"]+"="+this.login);
          console.log("OK");
          this.ChekIn=true;
        } else {
          console.log("ID: "+this.DT[i]["id"]+"="+this.id);
          console.log("Login: "+ this.DT[i]["login"]+"="+this.login);
          console.log("NO");
        }
      }
    })
}}
//??????????????????Код для фотрмы HTML?????????????????????????????????????
 id: <input type="text" [(ngModel)]="id">
 login: <input type="password" [(ngModel)]="login">
 <button (click)="handleLogin()">Login</button>
*/
