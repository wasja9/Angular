import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent { //implements OnInit {

  test:string="ddddddddddddddddddddddddddddddddd";

  userName:string="";
  response:any;
  info:string="?Text=blue"

  constructor(){}//private http:HttpClient) { }

  search(){
    this.test=this.test+'fr';
    console.warn('Errors');



   // this.http.get('http://localhost:4200/test')


    //this.http.get<{token:string}>('http://localhost:8080/'+this.info)

    //this.http.get<{token:string}>('api.github.com/users/seeschweiler')
    //api.github.com/users/seeschweiler
   // this.http.get('http://localhost:8080/users')//+this.info)
    // .subscribe((response)=>{
    //  this.response=response;
     // console.log(this.response);

      //  console.log("Work SUCCESTFULL");
      //  console.log("Work SUCCESTFULL");
      //  console.log("Work SUCCESTFULL");
      //.subscribe(
     //   data => console.log(data),
      //  err => console.log(err)
    //  )

    //  })
  }

//  ngOnInit(): void {
//  }
}
