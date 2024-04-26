import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../services/home.service';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  header=["nom","titre","description","Duree","Expiration","Competence"]
  transactions:any=[];
  SignInUpServiceService =inject(AuthService);

  logout() {
    this.SignInUpServiceService.logout()
    this.router.navigate(['Sign-in'])}
  constructor(private home:HomeService,private router: Router){};
  getStages(){
    this.home.getall().subscribe(res=>{console.log(res);
      this.transactions = res;
    },error=>{
      console.error(error);
    });}
    Supprimer(id: number): void {
      this.home.deleteItem(id).subscribe({
        next: (resp) => {
          this.transactions = this.transactions.filter((item:any) => item.id !== id);
          console.log('Delete successful');
        },
        error: (error) => {
          console.error('Error deleting item', error);
        }
      });}
  ngOnInit(): void {
      this.getStages();
  }
}