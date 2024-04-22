import { Component,Input, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SidebarService } from '../services/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Stages:any=[];
  isSidebarVisible = true;
  constructor(private home : HomeService,private sidebarService: SidebarService) { }
  getStages(){
    this.home.getall().subscribe(res=>{console.log(res);
      this.Stages = res;
    },error=>{
      console.error(error);
    });
  }
  ngOnInit(): void {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
    this.getStages();
  }

}
