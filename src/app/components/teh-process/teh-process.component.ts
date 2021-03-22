import { Component, OnInit,Input } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

//import { BrnTreeComponent } from 'app/components/brn-tree/brn-tree.component';
//import { BrnTreeComponent } from 'brn-tree/brn-tree.component';//??????????????

@Component({
  selector: 'app-teh-process',
  templateUrl: './teh-process.component.html',
  styleUrls: ['./teh-process.component.css']
})
export class TehProcessComponent{
 // @Input() brnTreeComponent:BrnTreeComponent;//?????????????????
 // @Input() id_pr_t_1:string="1111111111";
  //@Input() id_pr_t_1;
  //id_pr_t:string="";
  id_br_t:string="";


  DT:any;
  TokenService:string="NWn7lcGfSv";

  // constructor(private http:HttpClient, private activatedRoute:ActivatedRoute,private brnTreeComponent:BrnTreeComponent) {
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    this.TokenService=localStorage.getItem('Auth-Token');//Извлекаем из сессии токен
    //console.log("VALUE_NNNNNN:"); console.log( this.id_pr_t_1);
   // console.log("VALUE_NNNNNN:"); console.log( (this.brnTreeComponent.ID_));


    this.TokenService=localStorage.getItem('Auth-Token');

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.id_br_t = params['id_br'];
     // this.id_pr_t = params['projict'];
      console.log("ID =: "); console.log(this.id_br_t);
      localStorage.setItem('id_br_s',this.id_br_t);//Заносим в сессию id выбранного проекта
      console.log("ID_PR_BR");
      console.log(localStorage.getItem('id_pr_s'));//Извлекаем из сессии id проекта
      console.log(localStorage.getItem('id_br_s'));//Извлекаем из сессии id проекта
    })

    //this.http.get('http://localhost:8083/prN/'+this.projict_temp+'/?token='+this.TokenService)
    this.http.get('http://localhost:8083/msBR/'+localStorage.getItem('id_br_s')+'/?token='+this.TokenService)
    //this.http.get('http://localhost:8083/msBR/111/?token='+this.TokenService)
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
