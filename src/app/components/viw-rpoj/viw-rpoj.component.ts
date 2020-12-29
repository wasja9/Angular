import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-viw-rpoj',
  templateUrl: './viw-rpoj.component.html',
  styleUrls: ['./viw-rpoj.component.css']
})
export class ViwRpojComponent {
  DT:any;
  TokenService:string="jYfI16NSpM";

  constructor(private http:HttpClient) { }

  get_all() {
    this.TokenService=localStorage.getItem('Auth-Token');
    // this.http.get('http://localhost:8083/users/')
    this.http.get('http://localhost:8083/prj/?token='+this.TokenService)

      .subscribe(data=>{
        console.log(data);
        this.DT=data;
      })
  }

  //chek_prj() {
  //  this.TokenService=localStorage.getItem('Auth-Token');

 // }


}
