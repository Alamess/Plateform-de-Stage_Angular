import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Prenom : any ;
  nom :any ;
  fliliere:any;
  id : any ;
  d: any[] = [];
  token: any;
  Addfav(id:any){
    
    this.d.push(id);
  }
  Deletefav(id: any) {
    const index = this.d.indexOf(id);
    if (index > -1) {
      this.d.splice(index, 1);
    }
  }
  private baseUrl = 'http://localhost:8083'

  constructor( private http:HttpClient) { }

  authSubject =new BehaviorSubject<any>({
    user:null
  })
 
  login(email:any,mdp:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/Login`,{email,mdp}).pipe(
      catchError((error) => {
        console.error('Authentication error:', error);
        return throwError(error);
      }),
     
      tap((response: any) => {
        console.log(response.token)
        this.Prenom = response.prenom; 
        this.nom=response.nom;
        this.fliliere=response.filiere;
        this.d=response.favoris;
        this.id=response.id ;
        this.token=response.jwt ;
      })
  )}
  register(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/User/SignUp`,userData)
  }

  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }
  getall(){
    return this.http.get<any>(`${this.baseUrl}/users`)
  }
  deleteItem1(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8083/etudiants/${id}`);
  }
  deleteItem2(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8083/societes/${id}`);
  }

}
