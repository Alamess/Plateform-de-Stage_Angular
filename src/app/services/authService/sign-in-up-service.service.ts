import { CurrencyPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInUpServiceService {

  private baseUrl = 'http://localhost:8083'

  constructor( private http:HttpClient) { }

  authSubject =new BehaviorSubject<any>({
    user:null
  })

  login(email:any,mdp:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/Login`,{email,mdp})
  }
  register(userData:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/User/SignUp`,userData)
  }

  getUserProfile():Observable<any>{
    const headers=new HttpHeaders({
      Authorization:`Bearer(${localStorage.getItem("jwt")}`
    })
    return this.http.post<any>(`${this.baseUrl}/api/User/SignUp`, {headers}).pipe(
      tap((user)=>{
        const CurrentState=this.authSubject.value;
        this.authSubject.next({...CurrentState,user})
      })
    )
    
  }

  logout(){
    localStorage.clear()
    this.authSubject.next({})
  }

}
