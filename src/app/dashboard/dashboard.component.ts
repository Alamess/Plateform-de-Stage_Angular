import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  isSidebarVisible = false;
  Stages : any =[];
  constructor(private Auth : AuthService,private home : HomeService){}
  getStages(){
    this.home.getall().subscribe(res=>{console.log(res);
      this.Stages = res;
      this.Stages=this.Stages.filter((s:any)=>this.Auth.d.includes(s.id));
    },error=>{
      console.error(error);
    });
  }
  ngOnInit(): void {
    this.getStages();
  }
  actionRealisee(){
    this.Stages=this.Stages.filter((s:any)=>this.Auth.d.includes(s.id));
  }
}
