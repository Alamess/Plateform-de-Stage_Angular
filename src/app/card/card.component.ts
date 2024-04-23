import { Component, Input } from '@angular/core';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() info:{ id: number; nom: string; title: String; img: String;expired:String } | undefined;
  isFavorite: boolean = false;
  constructor(private Auth : AuthService){}
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
      this.Auth.Addfav(this.info?.id);
      console.log(this.Auth.d);
    }
    else{
      this.Auth.Deletefav(this.info?.id);
      console.log(this.Auth.d);
    }
  }
}
