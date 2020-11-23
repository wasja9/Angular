import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Response} from "selenium-webdriver/http";
//import {Http, Response} from '@angular/http'

@Injectable()

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent { //implements OnInit {

  test:string="dddddddddddddd";
  tss:string='ggg';

  userName:string="";
  response:any;
  info:string="?Text=blue"
  user:string;

  constructor(private http:HttpClient,
              httpclient :HttpClient
  ) { }

  get_s(){
   // get_s():Observable<>{
    console.log("GET1: ");
    //this.test=this.test+'fr'
    console.log("GET2: ");
   //return this.http.get('http://localhost:4200/')

    this.http.get('http://localhost:8080/users')
   //return this.http.get<{token:string}>('http://localhost:8080/users/')

    console.log("GET3: ");

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
    this.http.post<{token:string}>('http://localhost:8080/users/', this.user)

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
