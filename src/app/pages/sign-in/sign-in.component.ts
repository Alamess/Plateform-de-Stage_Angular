import { Component, inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isSignUp = false; 
  authService =inject(AuthService);

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
    this.authService.loginService(this.authForm.value)
    .subscribe({
      next:(res)=>{
        alert("Login is Successful !");
        this.authForm.reset();
        this.router.navigate(['profile']);

      },
      error:(err)=>{
      console.log(err);
      }
    })
  }
  onSignUp(){
    console.log("boobs");
  }
  signIn(){
    this.authService.loginService(this.authForm.value)
    .subscribe({
      next:(res)=>{
        alert("Login is Successful !");
        this.authForm.reset();
        this.router.navigate(['profile']);

      },
      error:(err)=>{
      console.log(err);
      }
    })
  }
}
