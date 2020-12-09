import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response} from "selenium-webdriver/http";
import {Token} from "@angular/compiler";

//interface UserV {
 // id: number,
 // login: string
//}

import {map} from "rxjs/internal/operators";
//import {Http, Response} from '@angular/http'

import {Users} from './users';

@Injectable(
//  {providedIn: 'root'}
  )



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],




})

//export class US{
  //constructor(
   // public id: number,
    // public login: string
 // ){
 // }
//}

export class TestComponent { //implements OnInit {


  userName:string="";
  response:any;
  info:string="?Text=blue"
  user:string;
  responseStatus: number;
  users: Users[]=[];
  //users: Users[];
  //US:US[];
   // DT: users;
  DT:any;
  constructor(private http:HttpClient,
              httpclient :HttpClient
  ) { }


  get_s() {
    this.http.get('http://localhost:8083/users/')
       .subscribe(data=>{
        console.log(data);
      //  this.DT=data;
         this.DT=data;
      })
  }

  add(){

    console.log("ADD1: ");

    this.user='{"firstName":"sss","lastName":"sss","login":"sss","password":"123"}';
    //this.http.post('http://localhost:8080/users',{})//, {"firstName":"sss","lastName":"sss","login":"sss","password":"123" })

    this.http.post('http://localhost:8083/users', {"firstName":"sss","lastName":"sss","login":"sss","password":"123" })

      .subscribe(result => {
        alert(result);
      }, error => {
        alert(error); // [object Object]
      });

    console.log("ADD2: ");
    // .map((response: Response)=>response.json())
  }


}

