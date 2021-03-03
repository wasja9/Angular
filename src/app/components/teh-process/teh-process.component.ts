import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teh-process',
  templateUrl: './teh-process.component.html',
  styleUrls: ['./teh-process.component.css']
})
export class TehProcessComponent{
  projict_temp:string="";
  DT:any;
  TokenService:string="NWn7lcGfSv";

  //


  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    this.TokenService=localStorage.getItem('Auth-Token');

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.projict_temp = params['id'];
      console.log("ID =: "); console.log(this.projict_temp);
    })

    this.http.get('http://localhost:8083/ms/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
        console.log("VALUE:");
        //console.log(data[1][1].length);
         console.log(data);
       // console.log(this.DT[0].name);
        //console.log(this.DT.length);

      })


  }
}
