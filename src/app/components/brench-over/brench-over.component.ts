import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brench-over',
  templateUrl: './brench-over.component.html',
  styleUrls: ['./brench-over.component.css']
})
export class BrenchOverComponent {
  DT:any;
  TokenService:string="jYfI16NSpM";
  projict_temp:string="";

  //Коструктрор переопределяет данные, запрашивает данные однократнос с сервера и помещает их в массив date
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/brn/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;})

    this.activatedRoute.queryParams.subscribe(params => {
      this.projict_temp = params['projict'];
      //let value_N = params['keyN'];
      //console.log("Hello");
      //console.log(value_1);
    });


    //this.route.queryParams
    //  .filter(params => params.order)
    //  .subscribe(params => {
    //    console.log(params); // { order: "popular" }

    //    this.order = params.order;
    //    console.log(this.order); // popular

    //this.projict = this.projict;
    //console.log(this.projict);
  }

  //Функция запрашивает данные однократнос с сервера и помещает их в массив date
  get_all() {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/brn/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
       // console.log(this.projict);
      })
  }



}
