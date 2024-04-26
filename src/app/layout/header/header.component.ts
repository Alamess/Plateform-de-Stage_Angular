import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { SidebarComponent } from '../sidenav/sidenav.component';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

  constructor(private sidebarService: SidebarService,public router: Router) {}
  SignInUpServiceService =inject(AuthService) ;

  logout() {
    this.SignInUpServiceService.logout()
    this.router.navigate(['Sign-in'])}
  toggleSidebar() {
  // Check if the button click event is registered
    this.sidebarService.toggleSidebar();
    // Check if the visibility state is changing
  }
}
