import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isSidebarVisible = false;
  address = '123 Main St, City, Country';
  isEditMode = false;
  editAddress() {

    this.address = 'New Address, City, Country';
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
