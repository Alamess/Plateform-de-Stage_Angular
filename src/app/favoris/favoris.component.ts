import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit{
  isSidebarVisible = false;
  Stages : any =[];
  text : String ="Ajouter un CV";
  ispicked : boolean = false ;
   showModal: boolean = false;
   CV:any;
   corr:any={};
  constructor(private Auth : AuthService,private home : HomeService){}
  actionRealise(data:any){
    this.showModal=true;
    this.corr=data;
    console.log(this.corr);
  }
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
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.ispicked=true ;
      console.log('Fichier sélectionné:', file);
      this.text="changer le CV";
    }
  }
  quitter(){
    this.showModal = false ;
    this.ispicked =false ;
  }
}

