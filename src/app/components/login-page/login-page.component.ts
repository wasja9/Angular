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
export class LoginPageComponent implements OnInit, OnDestroy {
form:FormGroup;
aSub: Subscription;

  constructor(private auth:AuthService,
  private  router:Router,
              private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup( {
      login: new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(2)])
    })
    this.route.queryParams.subscribe((params: Params)=>{});
  }
  onSubmit(){
    this.aSub=this.auth.login(this.form.value).subscribe(
      ()=>this.router.navigate(['/overview']),
      error=>{
        console.warn(error)
        this.form.enable()

    }


    )
    /* */
   // const  user={
   //   login: this.form.value.login,
   //   password: this.form.value.password,
   // }
   // this.auth.login(user).subscribe(
   //   ()=>console.log('Login success'),
  //    error=>{
  //      console.warn(error)
  //    }
  //  )

  }

ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe();
    }
}

//constructor(private auth: AuthService,
//private  router: Router,
//private  route: ActivatedRoute){

//}

}
