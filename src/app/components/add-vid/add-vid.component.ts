import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {Injectable} from "@angular/core";

@Component({
  selector: 'app-add-vid',
  templateUrl: './add-vid.component.html',
  styleUrls: ['./add-vid.component.css']
})
export class AddVidComponent {
  TokenService:string;//="3TQT2iy1Gl";

  video: any;
  path: string = "";
  idus: string = "";
  idpr: string = "";
  idbr: string = "";

  constructor(private http:HttpClient) { }


  ADD_f() {
    if (localStorage.getItem('Auth-Token') !== null) {
      this.TokenService=localStorage.getItem('Auth-Token');//Инициализация токена из сессии
    }
    else {this.TokenService="";}

    //console.log(this.login+":"+this.password+":"+this.firstName+":"+this.lastName);

    this.idus = "";
    this.idpr = localStorage.getItem('id_pr_s');
    this.idbr = localStorage.getItem('id_br_s');
    // console.log(localStorage.getItem('id_pr_s'));//Извлекаем из сессии id проекта
    // console.log(localStorage.getItem('id_br_s'));//Извлекаем из сессии id проекта

    this.http.post('http://localhost:8083/vd/?token='+this.TokenService, {"video":this.video,"path":this.path,"idus":this.idus,"idpr":this.idpr,"idbr":this.idbr})
    //this.http.post('http://localhost:8083/pr/?token='+this.TokenService, {"name":this.name,"str":0,"node":0,"row":0,"idRoot":0})

      .subscribe(result => {
        alert(result);
      }, error => {

        alert(error);
      });


  }



}
