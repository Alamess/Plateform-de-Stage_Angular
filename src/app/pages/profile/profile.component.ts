import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
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
