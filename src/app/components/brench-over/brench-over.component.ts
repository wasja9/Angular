import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-brench-over',
  templateUrl: './brench-over.component.html',
  styleUrls: ['./brench-over.component.css']
})
export class BrenchOverComponent {
  DT:any;
  TokenService:string="jYfI16NSpM";

  //Коструктрор переопределяет данные, запрашивает данные однократнос с сервера и помещает их в массив date
  constructor(private http:HttpClient) {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/brn/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;})
  }

  //Функция запрашивает данные однократнос с сервера и помещает их в массив date
  get_all() {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/brn/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
      })
  }



}
