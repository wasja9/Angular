import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 tss:string='ggg';
  MD:number=0;
  model:string;
  modS:{
    color:string,
    kusov:string,
    spid:number
  }
 // modV:modS;

  //mod1:mod;
  mod:string[];

  constructor() { }

  ngOnInit(): void {
   this.model="BMV";
   // this.mod={'red','kabriolet',200};
    this.mod=['red','kabriolet'];
this.modS={
      color:"red",
      kusov:"red",
      spid:200
    }
  }

  mor(){
    console.warn('Errors');
    console.log('RRRRRRRRR');
    this.tss=this.tss+'hhh'
  }

  addOpt(option){
    this.mod.unshift(option);
    return false;
  }

  delitOpt(option){
    //console.log(option);
   for (let i=0;i < this.mod.length; i++){
     if(this.mod[i]==option){
       this.mod.splice(i,1);
     }

   }
  }

  carSelect(carName){
    if (carName=="bmw"){
      this.model="BMV";
      // this.mod={'red','kabriolet',200};
      this.mod=['red','kabriolet'];
      this.modS={
        color:"blue",
        kusov:"blue",
        spid:230
      }

    }
    else if (carName=="audi"){
      this.model="AUDI";
      // this.mod={'red','kabriolet',200};
      this.mod=['red','kabriolet'];
      this.modS={
        color:"GREY",
        kusov:"GREY",
        spid:240
      }
    }
    else {
      this.model="MERSEDES";
      // this.mod={'red','kabriolet',200};
      this.mod=['red','kabriolet'];
      this.modS={
        color:"wait",
        kusov:"GWAIT",
        spid:270
      }
    }

  }

  dtt(){return 3};

}
