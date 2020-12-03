import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response} from "selenium-webdriver/http";
import {Token} from "@angular/compiler";

import {map} from "rxjs/internal/operators";
//import {Http, Response} from '@angular/http'

import {Users} from './users';

@Injectable()

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],

  template: `<div>
<p>id: {{users?.id}}</p>
                    <p>login: {{users?.login}}</p>

               </div>`
})
export class TestComponent { //implements OnInit {

  //     <p>password: {{users?.password}}</p>
  //     <p>firstName: {{users?.firstName}}</p>
  //     <p>lastName: {{users?.lastName}}</p>

  test:string="dddddddddddddd";
  tss:string='ggg';
  data:any;

  userName:string="";
  response:any;
  info:string="?Text=blue"
  user:string;
  uuu:Observable<any>;

  responseStatus: number;
//  lstcomponents: Comments[];

  users: Users;

  constructor(private http:HttpClient,
              httpclient :HttpClient
  ) { }


  get_sss() {
    console.log("GET2: ");
   // this.http.get('http://localhost:8087/users/').subscribe((data: Users) => this.users = data);
    //this.uuu=this.http.get('http://localhost:8087/users/')
    this.http.get('http://localhost:8087/users/')

 .subscribe(data=>{
   console.log("GET2_1: ");

     console.log(data);
     })

    console.log("GET2_2: ");

  }


  get_s(){//:Observable<any>{
   // get_s():Observable<>{
    console.log("GET1: ");

    return this.http.get('http://localhost:8087/users/')
      .subscribe(

        data=>
        {
          console.log(data);
          console.log("GET1_1: ");
        //  login:"login"
        }
      )
    //return this.http.get('http://localhost:8080/users/')
    //return this.http.get('http://localhost:8080/users/', {observe: 'response'})
      //.pipe(map(data => {
      //return data.http
     // .pipe(users:json=>)
     // }));
  //.catch(this.ha);
    // .subscribe(data=>{
       // console.log("GET3: ");
       // console.log(data);
     // })
   //return this.http.get<{token:string}>('http://localhost:8080/users/')

    console.log("GET1_2: ");

    //this.http.get<{token:string}>('api.github.com/users')
    //api.github.com/users/seeschweiler
    //this.http.get('http://localhost:8080/users')//+this.info)

    //.subscribe((response)=>{
      //this.response=response;
      // console.log("DATE_2: ");
     // console.log(this.response);

      //.subscribe(
     //   data => console.log(data),
      //  err => console.log(err)
    //  )

     // })
  }


  add(){
    //add():Observable<>{
    console.log("ADD1: ");
    //this.test=this.test+'fr'


    //this.http.get<{token:string}>('http://localhost:8080/users/')

    //postData(user: User){
    //user:string =
    this.user='{"firstName":"sss","lastName":"sss","login":"sss","password":"123"}';
    //this.http.post('http://localhost:8080/users',{})//, {"firstName":"sss","lastName":"sss","login":"sss","password":"123" })

    this.http.post('http://localhost:8087/users', {"firstName":"sss","lastName":"sss","login":"sss","password":"123" })


      .subscribe(result => {
        alert(result);
      }, error => {
        alert(error); // [object Object]
      });




    console.log("ADD2: ");
     // .map((response: Response)=>response.json())
    //return this.http.post<{token:string}>('http://example.com/api/users', this.user);
      //return this.http.post<{token:string}>('http://localhost:8080/users/', ./user.json)


    //this.http.get<{token:string}>('api.github.com/users')
    //api.github.com/users/seeschweiler
    //this.http.get('http://localhost:8080/users')//+this.info)

    //.subscribe((response)=>{
    //this.response=response;
    // console.log("DATE_2: ");
    // console.log(this.response);


    // })
  }




//  ngOnInit(): void {
//  }

  mor(){

    console.log('RRRRRRRRR');
    console.log('CILD Constructor', this.tss)
    this.tss=this.tss+'hhh'
  }

}
