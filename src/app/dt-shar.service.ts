import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DTSharService {
  private data: string="qwert";

  constructor() { }

  getData():string {
    return this.data;
  }

  func(){return(this.data)}
}
