import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],

})
export class SidebarComponent implements OnInit {
  @Output() dataSent = new EventEmitter<Array<String>>();

  isSidebarVisible = true;
  isSubmenuOpen = false;
  PFEselected = false;
  ETEselected = false ;
  specialite ="" ;
  duree ="";
  constructor(private sidebarService: SidebarService) {}
  viderChamps(): void {
    // Récupérer les éléments d'entrée par leur ID et vider leurs valeurs
    this.specialite = '';
    this.duree= '';
  }
  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarService.toggleSidebar(); // Toggle sidebar state
  }


  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


  selectPFE() {
    this.PFEselected = true;
    this.ETEselected = false ;
  }
  selectETE() {
    this.PFEselected = false;
    this.ETEselected = true ;
  }
  submit(){
    if(this.PFEselected){
      this.dataSent.emit(['PFE',this.specialite,this.duree]);
    }
    else if(this.ETEselected){
      this.dataSent.emit(['ETE',this.specialite,this.duree]);
    }
    else{
      this.dataSent.emit([this.specialite,this.duree]);
    }
  }
  setSpecialite(event: any): void {
    this.specialite = event.target.value; 
    console.log('Spécialité mise à jour :', this.specialite); 
  }
  setDuree(event:any): void {
    this.duree = event.target.value; 
    console.log('Duree mise à jour :', this.duree); 
  }

}
