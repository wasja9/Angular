import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.services";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from  "@angular/common/http";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  username: string = "";
  password: string = "";
  isInvalid: boolean = false;


  constructor() { }

  handleLogin() {
    if (this.username == "Igor" && this.password == "123") {
      console.log("OK");
      this.isInvalid = false;
    } else {
      console.log("NO");
      this.isInvalid = true;
    }
  //  console.log(this.username)
  }

}
