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
  DT_SORT:any;
  TokenService:string="NWn7lcGfSv";
  projict_temp:string="";
  myAr=[[]];
  myArT=[];


  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.projict_temp = params['projict'];
    });

    this.TokenService=localStorage.getItem('Auth-Token');
    //this.http.get('http://localhost:8083/prN/Tochilo/?token='+this.TokenService)
    this.http.get('http://localhost:8083/prN/'+this.projict_temp+'/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;

////////////////////////////////////////////////////////////////////////////////////////////
        //Находим корневую запись и записываем в массив
        for (var i = 0; i < Number(this.DT.length); ++i) {
          if (this.DT[i].id==this.DT[i].idNode){
            this.myArT[0]=this.DT[i];
            this.myAr[0] = this.myArT;
          }
        }
      //сортировать по остальным полям
        let k:number=0;
        let m:number=0;
        let end_wh:boolean=true;
        let end_temp:boolean=true;
        while (end_wh){
          end_wh=true;
          end_temp=true;
          for (var j = 0; j < this.myAr[k].length; ++j) {
            m=0;
            this.myArT=[];
              for (var i = 0; i < Number(this.DT.length); ++i) {
                if (this.myAr[k][j].id==this.DT[i].idRoot){
                  this.myArT[m]=this.DT[i];
                  this.myAr[k+1] = this.myArT;
                  m++;
                  end_temp=false;
                }
              }
          }
          if (! end_temp){end_wh=true;} else{end_wh=false}
          console.log(this.myAr);
          k++;
        }
        this.DT_SORT=this.myAr;
//////////////////////////////////////////////////////////////////////////////////////////////////

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
