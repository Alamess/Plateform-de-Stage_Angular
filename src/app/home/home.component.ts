import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SidebarService } from '../services/sidebar/sidebar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  text : String ="Ajouter un PDF";
  ispicked : boolean = false ;
   showModal: boolean = false;
   CV:any;
  Stages:any=[];
  corr:any={};
  isSidebarVisible = true;
  constructor(private home : HomeService,private sidebarService: SidebarService) { }
  actionRealisee(data:any){
    this.showModal=true;
    this.corr=data;
    console.log(this.corr);
  }
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
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.ispicked=true ;
      console.log('Fichier sélectionné:', file);
      this.text="changer le PDF";
    }
  }
  quitter(){
    this.showModal = false ;
    this.ispicked =false ;
  }
  receiveData(data: Array<String>) {
    if(data[0]=="ETE"){
      this.home.getETE().subscribe(res=>{console.log(res);
        this.Stages = res;
        if(data[1]!==''&&data[2]!=='')
          { let datas=data[1].split(" ");
        let h:any=[];
        datas.forEach(d=>{
          let filteredStages =this.Stages.filter((stage: any) =>
          stage.necessarity&&stage.necessarity.toUpperCase().includes(d.toUpperCase())&&stage.nom.toUpperCase().includes(data[2].toUpperCase())
         );
         h = h.concat(filteredStages); 
  
      })
      console.log(h);
      this.Stages=h}
       else if(data[1]!==''&&data[2]==''){ let datas=data[1].split(" ");
       let h:any=[];
       datas.forEach(d=>{
         let filteredStages =this.Stages.filter((stage: any) =>
         stage.necessarity&&stage.necessarity.toUpperCase().includes(d.toUpperCase())
        );
        h = h.concat(filteredStages); 
 
     })
     console.log(h);
     this.Stages=h}
      else if(data[1]==''&&data[2]!=='')
        {this.Stages = this.Stages.filter((stage: any) =>
          stage.nom&&stage.nom.toUpperCase().includes(data[2].toUpperCase())
        
       );}
       console.log("Stages apres filtrage :",this.Stages);
      }
      ,error=>{
        console.error(error);
      });
    }
    else if(data[0]=="PFE"){
      this.home.getPFE().subscribe(res=>{console.log(res);
        this.Stages = res;
        if(data[1]!==''&&data[2]!=='')
          { let datas=data[1].split(" ");
        let h:any=[];
        datas.forEach(d=>{
          let filteredStages =this.Stages.filter((stage: any) =>
          stage.necessarity&&stage.necessarity.toUpperCase().includes(d.toUpperCase())&&stage.nom.toUpperCase().includes(data[2].toUpperCase())
         );
         h = h.concat(filteredStages); 
  
      })
      console.log(h);
      this.Stages=h}
         else if(data[1]!==''&&data[2]==''){ let datas=data[1].split(" ");
         let h:any=[];
         datas.forEach(d=>{
           let filteredStages =this.Stages.filter((stage: any) =>
           stage.necessarity&&stage.necessarity.toUpperCase().includes(d.toUpperCase())
          );
          h = h.concat(filteredStages); 
   
       })
       console.log(h);
       this.Stages=h}
        else if(data[1]==''&&data[2]!=='')
          {this.Stages = this.Stages.filter((stage: any) =>
            stage.nom&&stage.nom.toUpperCase().includes(data[2].toUpperCase())
          
         );}
         console.log("Stages apres filtrage :",this.Stages);
      },error=>{
        console.error(error);
      });
      
    }
    else {this.home.getall().subscribe(res=>{console.log(res);
      this.Stages = res;
      if(data[0]!==''&&data[1]!==''){ let datas=data[0].split(" ");
      let h:any=[];
      datas.forEach(d=>{
        let filteredStages =this.Stages.filter((stage: any) =>
        stage.necessarity&&stage.necessarity.toUpperCase().includes(d.toUpperCase())&&stage.nom.toUpperCase().includes(data[1].toUpperCase())
       );
       h = h.concat(filteredStages); 

    })
    console.log(h);
    this.Stages=h }
       else if(data[0]!==''&&data[1]==''){ 
       let datas = data[0].split(" ");
        let h: any = [];

        datas.forEach(d => {
          let filteredStages = this.Stages.filter((stage: any) =>
            stage.necessarity && stage.necessarity.toUpperCase().includes(d.toUpperCase())
          );
          h = h.concat(filteredStages); 
        });

        console.log(h);
          this.Stages=h}
      else if(data[0]==''&&data[1]!=='')
        {this.Stages = this.Stages.filter((stage: any) =>
          stage.nom&&stage.nom.toUpperCase().includes(data[1].toUpperCase())
        
       );}
       console.log("Stages apres filtrage :",this.Stages);
    },error=>{
      console.error(error);
    });
      
    }
    console.log('Données reçues du composant enfant:', data);
    
      
}
  }

