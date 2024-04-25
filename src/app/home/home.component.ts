import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SidebarService } from '../services/sidebar/sidebar.service';
import { EmailServiceService } from '../services/EmailService/email-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/authService/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Prenom = this.SignInUpServiceService.Prenom;
  Nom=this.SignInUpServiceService.nom ;
  Id=this.SignInUpServiceService.id;
  filiere=this.SignInUpServiceService.fliliere;
  text : String ="Ajouter un CV";
  ispicked : boolean = false ;
   showModal: boolean = false;
   CV:any;
   body:String="Chère Madame, Cher Monsieur,\n\n   Je m'appelle"+" "+this.Nom+" "+this.Prenom+" et je suis actuellement étudiant en"+" "+ this.filiere+" " +"à Ecole nationale d'ingenieur de carthage. J'ai remarqué avec grand intérêt votre offre de stage 'Plateforme de Hackathon et de challenge d'apprentissage (QA)' publiée sur Stages.\n\n   Je suis vivement intéressé par cette opportunité et je pense que ma formation et mes aspirations correspondent bien à ce que vous recherchez. Je suis convaincu que ce stage serait une excellente occasion d'enrichir mes connaissances et de développer davantage mes compétences.\n\n   De plus, je crois fermement que je peux contribuer à la croissance de votre entreprise grâce à mes compétences et à mon dévouement. Je suis prêt à apporter mon énergie, ma créativité et ma passion pour mon domaine d'études.\n\n   Je joins mon CV à cet email pour votre considération. Je serais ravi de discuter plus en détail de ma candidature lors d'un entretien.\n\n   Je vous remercie de l'attention que vous porterez à ma candidature.\n\n   Cordialement,\n "+this.Nom.toUpperCase()+" "+this.Prenom;
  Stages:any=[];
  corr:any={};
  isSidebarVisible = true;
  constructor(private spinner: NgxSpinnerService,private Email : EmailServiceService,private home : HomeService,private sidebarService: SidebarService,private SignInUpServiceService : AuthService) { }
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
  sendEmail(){
    this.spinner.show();
    this.Email.sendmail(this.CV,"ala.messaoud@enicar.ucar.tn","fama",this.body)
      .subscribe(
        (res) => {
          console.log(res);
          this.spinner.hide()
          this.showModal=false ;
          this.ispicked =false ;
          alert(res);
          this.text="Ajouter un CV";
        },
        (error) => {
          console.log(error);
        }
      );
  
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
      this.CV=file ;
      this.text="changer le CV";
      event.target.files.shift;
      console.log('Fichier sélectionné:', this.CV);
      
    }
  }
  quitter(){
    this.showModal = false ;
    this.ispicked =false ;
    this.text="Ajouter un CV";
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

