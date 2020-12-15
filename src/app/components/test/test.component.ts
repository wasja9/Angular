import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response} from "selenium-webdriver/http";
import {Token} from "@angular/compiler";

import {Users} from './users';
@Injectable(

  )
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

})

export class TestComponent { //implements OnInit {


  userName:string="";
  response:any;
  info:string="?Text=blue"
  user:string;
  responseStatus: number;
  users: Users[]=[];

  DT:any;
  TokenService:string="jYfI16NSpM";


  constructor(private http:HttpClient ) { }
 // console.log("ADD2: ");

  get_s() {

   // this.http.get('http://localhost:8083/users/')
    this.http.get('http://localhost:8083/users/?token='+this.TokenService)

       .subscribe(data=>{
        console.log(data);
         this.DT=data;
      })
  }

  add(){
    this.user='{"firstName":"sss","lastName":"sss","login":"sss","password":"123"}';
    this.http.post('http://localhost:8083/users/?token='+this.TokenService, {"firstName":"sss","lastName":"sss","login":"sss","password":"123" })
      .subscribe(result => {
        alert(result);
      }, error => {
        alert(error);
      });
  }

}

