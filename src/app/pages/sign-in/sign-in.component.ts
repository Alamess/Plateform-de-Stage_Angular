import { Component, inject } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  isSignUp = false; 
  SignInUpServiceService =inject(AuthService);

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
    const formvalue=this.authForm.value;
    console.log("fanta");
    this.SignInUpServiceService.login(formvalue.signInEmail,formvalue.signInPassword)
    .subscribe(
      (res)=>{
        localStorage.setItem("jwt",res.jwt)
        alert("Login is Successful !");
        this.router.navigate(['home'])},
        (error: any) => {
          // Handle error response
          console.error('Error fetching data:', error);
        }
      
      );
    }

    
  
  
  onSignUp(){
    console.log("boobs");
    const registervalue =this.RegisterForm.value;
    this.SignInUpServiceService.register(registervalue.signUpName)
    .subscribe(
      (res)=>{
        localStorage.setItem("jwt",res.jwt)
        alert("Register is Successful !");
      }
      );
  }

  
}