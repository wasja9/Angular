import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brn-tree',
  templateUrl: './brn-tree.component.html',
  styleUrls: ['./brn-tree.component.css']
})
export class BrnTreeComponent  {
  DT:any;
  TokenService:string="NWn7lcGfSv";
  projict_temp:string="";

//arr:Array();
  //let arr1 = new Array();

  // определение кортежа - кортеж состоит из двух элементов - строки и числа
  //  ID ---------idRoot-------row
 // let userInfo: [number, number, number];
 // enum userInfo: [number, number, number];


  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    const arr = new Array([],[]);
    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.projict_temp = params['projict'];
    });

    this.TokenService=localStorage.getItem('Auth-Token');
    //this.http.get('http://localhost:8083/prN/Tochilo/?token='+this.TokenService)
    this.http.get('http://localhost:8083/prN/'+this.projict_temp+'/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;

       arr;//=data;

      })



  }

  //Функция запрашивает данные однократнос с сервера и помещает их в массив date
  get_all_br() {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/prN/'+this.projict_temp+'/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
      })
  }

}
