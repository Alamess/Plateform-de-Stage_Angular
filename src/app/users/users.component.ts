import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  header=["nom","titre","description","Duree","Expiration","Competence"]
  transactions:any=[];
  
  constructor(private home:AuthService){};
  getStages(){
    this.home.getall().subscribe(res=>{console.log(res);
      this.transactions = res;
    },error=>{
      console.error(error);
    });}
    SupprimerEtudiants(id: number): void {
      this.home.deleteItem1(id).subscribe({
        next: (resp) => {
          this.getStages();
          console.log('Delete successful');
        },
        error: (error) => {
          console.error('Error deleting item', error);
        }
      });}
      SupprimerSoc(id: number): void {
        this.home.deleteItem2(id).subscribe({
          next: (resp) => {
            this.getStages();
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
