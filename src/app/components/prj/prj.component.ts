import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prj',
  templateUrl: './prj.component.html',
  styleUrls: ['./prj.component.css']
})
export class PrjComponent{
  DT:any;
  dd:number;
  myArray=[[]];
  //myAr=[][];
  TokenService:string="NWn7lcGfSv";

  constructor(private http:HttpClient) {
    //myAr=[];
   // this.myArray[0][0]="1";
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/prI/0/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
        console.log("VALUE:");
        //console.log(data[1][1].length);
       // console.log(data[0]);
        console.log(this.DT[0].name);
        console.log(this.DT.length);

        for (var i = 0; i < Number(this.DT.length); ++i) {

        }

      })
    console.log(this.DT.length);
    //number:i;
    //for (var i = 0; i < alert(this.DT.length); ++i) {
    //for (var i = 0; i < 10; ++i) {
     // console.log(this.DT[0][0]);
      //console.log(this.DT[i]);
    //}

  }

//Функция запрашивает данные однократнос с сервера и помещает их в массив date
  get_all_pr() {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/prI/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;
      })
  }


}
