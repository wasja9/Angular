import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

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

  constructor(private http:HttpClient) { }

  get_s(){
    console.log("DATE_1: ");
    //this.test=this.test+'fr'

   // this.http.get('http://localhost:4200/test')

    this.http.get('http://localhost:8080/users')
   //return this.http.get<{token:string}>('http://localhost:8080/users/')


        // value - результат

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
    console.log("ADD: ");
    //this.test=this.test+'fr'


    //this.http.get<{token:string}>('http://localhost:8080/users/')

    //postData(user: User){
    //user:string =
    this.user='{"firstName":"sss","lastName":"sss","login":"sss","password":"123"}';
    return this.http.post<{token:string}>('http://localhost:8080/users/', this.user);
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
