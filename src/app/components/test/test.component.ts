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
  userName:string="";
  response:any;
  info:string="?Text=blue"

  constructor(private http:HttpClient) { }

  search(){
    this.http.get('http://localhost:8080/'+this.info)
      .subscribe((response)=>{
      this.response=response;
      console.log(this.response);
      })
  }

//  ngOnInit(): void {
//  }
}
