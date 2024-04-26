import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  @ViewChild('etudiantCheckbox', { static: true }) etudiantCheckbox!: ElementRef<HTMLInputElement>;
  @ViewChild('societeCheckbox', { static: true }) societeCheckbox!: ElementRef<HTMLInputElement>;
  isSignUp = false; 
  SignInUpServiceService =inject(AuthService);

  msg:any;
  authForm: any;
  RegisterForm : any ;
  
  constructor( private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.authForm=this.formBuilder.group({
    
      Mdp:new FormControl(),
      email:new FormControl()
    }) ;
    this.RegisterForm=this.formBuilder.group({
      Nom: new FormControl(),
      Prenom:new FormControl(),
      Mdp:new FormControl(),
      email:new FormControl(),
      Filiere: new FormControl(),
        Type: new FormControl(),
    }) ;
    
  }
  toggleSignUp() {
    this.isSignUp = !this.isSignUp;
    this.showSocieteFields = false;
    this.showEtudiantFields = false;
    this.deselectCheckbox('societe');
    this.deselectCheckbox('etudiant');
  }
  onSignIn() {
    const formValue = this.authForm.value;
    console.log("fanta");
    this.SignInUpServiceService.login(formValue.email, formValue.Mdp)
      .subscribe(
        (res) => {
          localStorage.setItem("jwt", res.jwt);
          if (res.id) {
            this.router.navigate(['home']);
          } else {
            this.router.navigate(['dashboard']);
          }
        },
        (error: any) => {
          console.error('Error logging in:', error);
        }
      );
}
    showEtudiantFields: boolean = false;
  showSocieteFields: boolean = false;
  checkEtudiantFields: boolean = false;
  checkSocieteFields: boolean = false;
  
  
  
  onSignUp(){
    console.log("boobs");
    const registervalue =this.RegisterForm.value;
    const ETD=this.showEtudiantFields; //si true=>form etudiant sinon form Societe
    console.log(registervalue,ETD);
    this.SignInUpServiceService.register(registervalue,ETD)
    .subscribe(
      (res)=>{
        localStorage.setItem("jwt",res.jwt)
        alert("Register is Successful !");
      }
      );
  }
  toggleFields(field: string) {
    
    if (field === 'etudiant' ) {
     if(this.checkEtudiantFields==true && this.showEtudiantFields ){
       this.showEtudiantFields=false;
       this.checkEtudiantFields=false;
     }else{
       this.showEtudiantFields = true;
       this.showSocieteFields = false;
       this.checkEtudiantFields=true;
     }
     
   } else if (field === 'societe') {
     if(this.checkSocieteFields==true && this.showSocieteFields ){
       this.showSocieteFields=false;
       this.checkSocieteFields=false;
     }else{
     this.showSocieteFields = true;
     this.showEtudiantFields = false;
     this.checkSocieteFields=true;
   }
   }
   
 }
 deselectCheckbox(field: string) {
   if (field === 'etudiant') {
     this.etudiantCheckbox.nativeElement.checked = false;
   } else if (field === 'societe') {
     this.societeCheckbox.nativeElement.checked = false;
   }
 }
  
}