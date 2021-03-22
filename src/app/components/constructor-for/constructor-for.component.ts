import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructor-for',
  templateUrl: './constructor-for.component.html',
  styleUrls: ['./constructor-for.component.css']
})
export class ConstructorForComponent {
 // condition: boolean=true;
  condition: number=2;
  constructor() { }

setCondition(VAL:number){
    this.condition=VAL;
}

}
