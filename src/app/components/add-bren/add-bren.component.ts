import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {Injectable} from "@angular/core";

@Component({
  selector: 'app-add-bren',
  templateUrl: './add-bren.component.html',
  styleUrls: ['./add-bren.component.css']
})
export class AddBrenComponent {
  TokenService:string;//="3TQT2iy1Gl";

  //id: string = "";
  name: string = "";
  str: string = "";
  node: string = "";
  row: string = "";
  // PrData: string = "";
  idRoot: string = "";
  idUs: string = "";
  idNode: string = "";

  constructor(private http:HttpClient) {  }



  ADD_brn() {
    if (localStorage.getItem('Auth-Token') !== null) {
      this.TokenService=localStorage.getItem('Auth-Token');//Инициализация токена из сессии
    }
    else {this.TokenService="";}

    //console.log(this.login+":"+this.password+":"+this.firstName+":"+this.lastName);

     this.http.post('http://localhost:8083/pr/?token='+this.TokenService, {"name":this.name,"str":this.str,"node":this.node,"row":this.row,"idRoot":this.idRoot,"idNode":this.idNode})
    //this.http.post('http://localhost:8083/pr/?token='+this.TokenService, {"name":this.name,"str":0,"node":0,"row":0,"idRoot":0})

      .subscribe(result => {
        alert(result);
      }, error => {

        alert(error);
      });


  }


}
