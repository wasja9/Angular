import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prj',
  templateUrl: './prj.component.html',
  styleUrls: ['./prj.component.css']
})
export class PrjComponent{
  DT:any;
  TokenService:string="NWn7lcGfSv";

  constructor(private http:HttpClient) {
    this.TokenService=localStorage.getItem('Auth-Token');
    this.http.get('http://localhost:8083/prI/0/?token='+this.TokenService)
      .subscribe(data=>{
        //console.log(data);
        this.DT=data;})
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
