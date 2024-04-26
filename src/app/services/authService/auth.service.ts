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
  register( registervalue:any,ETD:boolean):Observable<any>{
    
    if (ETD){
      console.log("signupEtudiant a khouna")
      const Role="ETD"
      /*let m:Map<string,string>= new Map<string, string>();
      m.set("Nom",registervalue.Nom);
      m.set("Prenom",registervalue.Prenom);*/
      const q={
        "Nom":registervalue.Nom,
        "Prenom":registervalue.Prenom,
        "Mdp":registervalue.Mdp,
        "Email":registervalue.email,
        "Type":registervalue.Type,
        "Role":"ETD","Filiere":registervalue.Filiere
      }
      /*m.set("Mdp",registervalue.Mdp);
      m.set("Email",registervalue.email);
      m.set("Type",registervalue.Type);
      m.set("Role","ETD");*/
      console.log(q);
      return this.http.post<any>(`${this.baseUrl}/User/SignUp`,q).pipe(
        catchError((error) => {
          console.error('SignUp error:', error);
          return throwError(error);
        }),tap((response: any) => {
          console.log(response.token);
        }));

    }
    const x="SOC"
    console.log("signupSocieté a khouna")
    const q={
      "Nom":registervalue.Nom,
      "Prenom":registervalue.Prenom,
      "Mdp":registervalue.Mdp,
      "Email":registervalue.email,
      "Emplacement":registervalue.Type,
      "Role":"Role","NomSociete":registervalue.Filiere
    }
    /*m.set("Mdp",registervalue.Mdp);
    m.set("Email",registervalue.email);
    m.set("Type",registervalue.Type);
    m.set("Role","ETD");*/
    console.log(q);
    return this.http.post<any>(`${this.baseUrl}/User/SignUp`,q).pipe(
      catchError((error) => {
        console.error('SignUp error:', error);
        return throwError(error);
      }),tap((response: any) => {
        console.log(response.token);
      }));



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

  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }

}
