import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test2',
  //templateUrl: './test2.component.html',
   template: `<app-test1 [userName]="name" [userAge]="age" [TEST]="TEST"></app-test1>
  <p>{{TEST}}</p> `,
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
 // @Input() TEST1:string;
  TEST:string="Jon";
  name:string="Tom";
  age:number = 24;

  constructor() { }



}
