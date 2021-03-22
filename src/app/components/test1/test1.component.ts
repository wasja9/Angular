import {Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test1',
  //templateUrl: './test1.component.html',
  //<app-test2 [TEST1]="TEST1"></app-test2>
  template: `
             <p>Имя пользователя: {{userName}}</p>
             <p>Возраст пользователя: {{userAge}}</p> `,
  styleUrls: ['./test1.component.css']
})
export class Test1Component  {
  TEST1:string;
//  @Output() TEST:string;
  @Input() TEST:string;
  @Input() userName: string;
  @Input() userAge: number;
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {//Принимаем переменную из адресной строку
      this.TEST1 = params['userName'];
    });

    console.log("VALUE_NNNNNN:"); console.log( this.TEST );
   // get userAge() { return this._userAge; }
  }


}
