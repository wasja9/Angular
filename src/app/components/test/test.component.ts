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
  //templateUrl: './test.component.html',
    template: `<h1>Hello Angular 11</h1>
                    <p>Angular 11 представляет модульную архитектуру приложения</p>
                    <p>{{us_tm}}</p> 
                   
<button (click)="get_all()"> get_s </button>

<input class="TestComponent" type="text" name="num1" [(ngModel)]="num1" />

 <p>"NUM1: "{{num1}}</p> 

<ul>
  <thead>
  <th>Name</th>
  <th>Index</th>
  </thead>
  <li *ngFor="let date of DT">
  
 <a  routerLink = "/log" [queryParams]="{projict:  date.name}">{{date.name}}</a>

<!--
 <a  [routerLink] = "['/log',{id1:date.name}]" >{{date.name}}</a>
<a  routerLink = "/log" >{{date.name}}</a>

   <P>fain!!: {{date.name}}</P>
-->

  </li>
</ul>

      <p>{{ddd}}</p>           `,

  styleUrls: ['./test.component.css'],

})

export class TestComponent { //implements OnInit {


  userName:string="";
  response:any;
  info:string="?Text=blue"
  user:string;
  responseStatus: number;
  users: Users[]=[];

  num1: number;

  id:number=10;
  us_tm:string="ggg";
  ddd:string;
  DT:any;
  TokenService:string="jYfI16NSpM";
  myArray=[[]];


  constructor(private http:HttpClient) { }
 // console.log("ADD2: ");

  TestComponent(){
    this.TokenService=localStorage.getItem('Auth-Token');
    // this.http.get('http://localhost:8083/users/')
    this.http.get('http://localhost:8083/prj/?token='+this.TokenService)

      .subscribe(data=>{
        console.log(data);
        this.DT=data;
      })

  }
  get_all() {
    this.TokenService=localStorage.getItem('Auth-Token');
    // this.http.get('http://localhost:8083/users/')
    this.http.get('http://localhost:8083/prj/?token='+this.TokenService)

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

