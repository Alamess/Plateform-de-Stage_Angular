import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  d: any[] = [];
  constructor() { }
  Addfav(id:any){
    this.d.push(id);
  }
  Deletefav(id: any) {
    const index = this.d.indexOf(id);
    if (index > -1) {
      this.d.splice(index, 1);
    }
  }
}
