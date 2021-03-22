import { Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';
import {isBoolean} from "util";
import { DateSharService } from 'src/app/date-shar.service';
//import { BrnTreeComponent } from 'app/components/brn-tree/brn-tree.component';
@Component({
  selector: 'app-brn-tree',
  templateUrl: './brn-tree.component.html',
  styleUrls: ['./brn-tree.component.css']//,
  ,providers:[DateSharService]
})
export class BrnTreeComponent  {
 // public BrnTreeComponent:BrnTreeComponent; //?????????????????????????
  DT:any;
  DT_SORT:any;
  id_pr:string="";
  TokenService:string="NWn7lcGfSv";
  public projict_temp:string="";
  myAr=[[]];
  myArT=[];

 // id_pr_t_1={name:'Jon'};
  //id_pr_t_1:string;


 // constructor(private http:HttpClient, private activatedRoute:ActivatedRoute,private dateSharService:DateSharService) {
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute) {
    this.TokenService=localStorage.getItem('Auth-Token');//Извлекаем из сессии токен

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.projict_temp = params['pr_name'];
      this.id_pr = params['id_pr'];
    });
    localStorage.setItem('id_pr_s',this.id_pr);//Заносим в сессию id выбранного проекта
    this.TokenService=localStorage.getItem('Auth-Token');

    //this.myAr=[];//Обнуление массива

    ////////////////////////////////////////////////////////////////////////////////////////////
    //Kорневую запись записываем в массив
    this.myArT=[];//Обнуление массива
    //this.http.get('http://localhost:8083/prN/Tochilo/?token='+this.TokenService)
    this.http.get('http://localhost:8083/prI/'+this.id_pr+'/?token='+this.TokenService)
      .subscribe(data=>{
        this.DT=data;
           this.myArT[0]=this.DT[0];//Добавляем его в одномерный массив
           this.myAr[0] = this.myArT;//Добавляем одномерный массив в многомерный
    })

    this.http.get('http://localhost:8083/prND/'+this.id_pr+'/?token='+this.TokenService)
      .subscribe(data=>{
        console.log(data);
        this.DT=data;

      //  localStorage.setItem('id_pr_s',this.myAr[0][0].id);//Заносим в сессию id выбранного проекта
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
       // localStorage.setItem('id_pr_s',this.myAr[0][0].id);//Заносим в сессию id выбранного проекта
        this.DT_SORT=this.myAr;
        //console.log("ID_PR");
        //console.log(localStorage.getItem('id_pr_s'));//Извлекаем из сессии id проекта

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
