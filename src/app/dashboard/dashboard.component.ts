import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../services/home.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  header=["nom","titre","description","Duree","Expiration","Competence"]
  transactions:any=[];
  
  constructor(private home:HomeService){};
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