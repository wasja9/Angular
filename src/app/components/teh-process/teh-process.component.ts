import { Component, OnInit } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teh-process',
  templateUrl: './teh-process.component.html',
  styleUrls: ['./teh-process.component.css']
})
export class TehProcessComponent{
  id_pr_t:string="";
  id_br_t:string="";

  DT:any;
  TokenService:string="NWn7lcGfSv";

  //
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    this.TokenService=localStorage.getItem('Auth-Token');

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.id_br_t = params['id_br'];
      this.id_pr_t = params['projict'];
      console.log("ID =: "); console.log(this.id_pr_t);console.log(this.id_br_t);
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
