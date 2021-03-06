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
  public projict_temp:string="";
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
          if (this.DT[i].id==this.DT[i].idNode){//Ищем корень дерева проекта
            this.myArT[0]=this.DT[i];//Добавляем его в одномерный массив
            this.myAr[0] = this.myArT;//Добавляем одномерный массив в многомерный
          }
        }
      //сортировать по остальным полям
        let k:number=0;
        let m:number=0;
        let end_wh:boolean=true;
        while (end_wh){//Цикл по данным, пока находит хоть одного наследника(chtild)
          end_wh=false;//Окончание цикла если не нашол нового элемента в массиве
          this.myArT=[];//Обнуление массива
          m=0;//Коэффициент элемента в вложенном массиве
          for (var j = 0; j < this.myAr[k].length; ++j) {
              for (var i = 0; i < Number(this.DT.length); ++i) {
                if (this.myAr[k][j].id==this.DT[i].idRoot){
                  this.myArT[m]=this.DT[i];//Добавляем его в одномерный массив
                  this.myAr[k+1] = this.myArT;//Добавляем одномерный массив в многомерный
                  m++;
                  end_wh=true;//если нашол новый элемента в массиве запустить продолжение цикла
                }
              }
          }
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
