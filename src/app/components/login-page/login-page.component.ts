import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.services";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
form:FormGroup;

  constructor(){}//private auth:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      login: new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(2)])
    })

  }
  onSubmit(){
    /* */
    const  user={
      login: this.form.value.login,
      password: this.form.value.password,
    }
   // this.auth.login(user).subscribe(
   //   ()=>console.log('Login success'),
   //   error=>{
    //    console.warn(error)
   //   }
   // )

  }

}
