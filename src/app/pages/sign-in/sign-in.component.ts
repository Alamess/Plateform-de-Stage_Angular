import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isSignUp = false; 
  msg:any;
  authForm: any;
  RegisterForm : any ;
  
  constructor( private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(): void {
   this.authForm=this.formBuilder.group({
    signInEmail:['',[Validators.email,Validators.required]],
    signInPassword:['',Validators.required]
  }) ;
  this.RegisterForm=this.formBuilder.group({
    signUpName:['',Validators.required],
    signUpEmail:['',[Validators.email,Validators.required]],
    signUpPassword:['',Validators.required]
  }) ;
  }
  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
  }
  onSignIn(){
    console.log("fanta");
  }
  onSignUp(){
    console.log("boobs");
  }
}
