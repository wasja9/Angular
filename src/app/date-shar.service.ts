import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateSharService {
  private data: string="Hello!";
//fff:string="Hello";
  constructor() { }
  //Get и Set для поля data
  getData():string {return this.data;}
  setData(data:string){this.data=data;}

}
