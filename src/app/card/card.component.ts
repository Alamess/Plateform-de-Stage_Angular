import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() actionParent = new EventEmitter<any>();
  @Output() actionParent2 = new EventEmitter<any>();
  @Input() info:{ id: number; nom: string; title: String; img: String;expired:String;Competence:String;Description:String;Duree:String } | undefined;
  @Output() dataSent = new EventEmitter<boolean>();
  isFavorite: boolean = false;
  constructor(private Auth : AuthService){}
  ngOnInit(): void{
    if(this.Auth.d.includes(this.info?.id)){
      this.isFavorite=true;
    }
  }
  Togglecard(){
    this.actionParent2.emit(this.info);

  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
      this.Auth.Addfav(this.info?.id);
      console.log(this.Auth.d);
    }
    else{
      this.Auth.Deletefav(this.info?.id);
      console.log(this.Auth.d);
      this.actionParent.emit();
    }
  }
}
