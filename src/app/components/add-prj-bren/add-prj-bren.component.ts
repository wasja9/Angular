import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {Injectable} from "@angular/core";

@Component({
  selector: 'app-add-prj-bren',
  templateUrl: './add-prj-bren.component.html',
  styleUrls: ['./add-prj-bren.component.css']
})
export class AddPrjBrenComponent{
  TokenService:string;//="3TQT2iy1Gl";

  //id: string = "";
  name: string = "";
  str: string = "";
  node: string = "";
  row: string = "";
 // PrData: string = "";
  id_root: string = "";
  id_us: string = "";

  constructor(private http:HttpClient) { }


  ADD_prj() {
    if (localStorage.getItem('Auth-Token') !== null) {
      this.TokenService=localStorage.getItem('Auth-Token');//Инициализация токена из сессии
    }
    else {this.TokenService="";}


    //console.log(this.login+":"+this.password+":"+this.firstName+":"+this.lastName);

    this.http.post('http://localhost:8083/add/?token='+this.TokenService, {"name":this.name,"str":this.str,"node":this.node,"row":this.row,"id_root":this.id_root,"id_us":this.id_us})
      .subscribe(result => {
        alert(result);
      }, error => {

        alert(error);
      });


  }

}
