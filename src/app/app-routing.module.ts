import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthguardService } from './services/authguard.service';
import { FavorisComponent } from './favoris/favoris.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: 'Sign-in', component: SignInComponent },
{ path: 'home', component: HomeComponent },
{ path: 'favoris', component: FavorisComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'Users', component:UsersComponent  },
{ path: '**', redirectTo: '/Sign-in' },
{path:'',redirectTo:'/home',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
