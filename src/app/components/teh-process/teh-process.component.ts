import { Component, OnInit, Input, NgModule} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';

import {FormsModule} from "@angular/forms";

import {DTSharService} from 'src/app/dt-shar.service';

//import { BrnTreeComponent } from 'app/components/brn-tree/brn-tree.component';
//import { BrnTreeComponent } from 'app/components/brn-tree/brn-tree.component';


@Component({
  selector: 'app-teh-process',
  templateUrl: './teh-process.component.html',
  styleUrls: ['./teh-process.component.css'],
  providers: [DTSharService]
})

//@NgModule({
 // imports: [
 //   BrnTreeComponent
 // ],
//  declarations: [
//    BrnTreeComponent
 // ]
 // ,  exports: [BrnTreeComponent]
//})

export class TehProcessComponent{
 // @Input() TEMPP;//:string="777";
  @Input() userName1: string;
  @Input() userAge1: number;

 // id_pr_t:string="777";
  id_br_t:string="";

  DT:any;
  TokenService:string="NWn7lcGfSv";

 // public TehProcessComponent:TehProcessComponent;
 // public BrnTreeComponent:BrnTreeComponent;

  //
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute, private dTSharService: DTSharService) {

   // console.log("DDDDDDDDDDDDDD");console.log(this.TEMPP);
    //console.log(this.dTSharService.data);
    console.log("OUTPUT VALUE: ");
    //console.log(this.dTSharService.data);
    console.log(this.dTSharService.func());
    console.log(this.dTSharService.getData());
    this.TokenService=localStorage.getItem('Auth-Token');//

    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.id_br_t = params['id_br'];
      console.log("ID =: "); console.log(this.id_br_t)
      //this.id_pr_t = params['projict'];
     // console.log("ID =: "); console.log(this.id_pr_t);console.log(this.id_br_t);
    })

    this.http.get('http://localhost:8083/ms/?token='+this.TokenService)
      .subscribe(data=>{
        this.DT=data;
        console.log("VALUE:");
         console.log(data);
      })


  }
}
