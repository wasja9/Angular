import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';
import {isBoolean} from "util";

@Component({
  selector: 'app-brn-tree',
  templateUrl: './brn-tree.component.html',
  styleUrls: ['./brn-tree.component.css']
})
export class BrnTreeComponent  {
  DT:any;
  TokenService:string="NWn7lcGfSv";
  projict_temp:string="";
  myAr=[[]];

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

        console.log("Данные массива: ");
        console.log(this.DT.length);
        console.log(this.DT);

        //Находим корневую запись и записываем в массив
        for (var i = 0; i < Number(this.DT.length); ++i) {
        //  console.log(this.DT[i].id);
        //  console.log(this.DT[i].idNode);
          if (this.DT[i].id==this.DT[i].idNode){
            this.myAr[0][0] = this.DT[i];
          }
        }

        let k:number;
        let end_wh:boolean;
        end_wh=true;
//сортировать по остальным полям
        while (end_wh){
          for (var i = 0; i < Number(this.myAr[i].length); ++i) {
            for (var j = 0; j < Number(this.DT.length); ++j) {
              if (this.myAr[i].id==this.DT[i].idNode){
                this.myAr[0][0] = this.DT[i];
              }
            }
          }
         // for (var i = 0; i < Number(this.DT.length); ++i) {}
          end_wh=false;
          k++;
        }
        //сортировать по остальным полям
        //for (var i = 0; i < Number(this.DT.length); ++i) {}
        //while (i < $("#pQuantity").val()) {          i += 1;        };


        //сортировать пока не найдешь последнего

       // for (var i = 0; i < Number(this.DT.length); ++i) {
       //   for (var j = 0; j < Number(this.DT.length); ++j) {
       //     this.myAr[0][i] = this.DT[i];
       //     console.log(this.myAr[0][i]);
       //   }
        //}

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
