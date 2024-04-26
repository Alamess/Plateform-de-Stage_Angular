import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(  public router: Router){}

  SignInUpServiceService =inject(AuthService) ;
  isSidebarVisible = false;
  Prenom = this.SignInUpServiceService.Prenom;
  Nom=this.SignInUpServiceService.nom ;
  Id=this.SignInUpServiceService.id;
  filiere=this.SignInUpServiceService.fliliere;
  isEditMode = false;
  editAddress() {

    this.Prenom = 'New Address, City, Country';
  }

  logout() {
    this.SignInUpServiceService.logout()
    this.router.navigate(['Sign-in'])}

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
  
    this.isEditMode = false;
  }

  cancelEdit() {
    this.isEditMode = false;
  }
}
