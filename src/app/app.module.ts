import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { RouterLinkActiveExactDirective } from './main/appRouterLinkActiveExact.directive';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ModelComponent } from './layout/model/model.component';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { FavorisComponent } from './favoris/favoris.component';
// Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    MainComponent,
    RouterLinkActiveExactDirective,
    ProfileComponent,
    TimetableComponent,
    CardComponent,
    SignInComponent,
    ModelComponent,
    FavorisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
