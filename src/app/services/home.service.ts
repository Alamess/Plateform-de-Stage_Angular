import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ApiUrl="http://localhost:8083/stage/getall"
  ApiUrl1="http://localhost:8083/stage/getallETE"
  ApiUrl2="http://localhost:8083/stage/getallPFE"
  constructor(private httpClient:HttpClient) { }
  getall(){
    return this.httpClient.get(this.ApiUrl).pipe(catchError((error)=>{
      console.error(error);
      return throwError(error);
    }));
    
  }
  getETE(){
    return this.httpClient.get(this.ApiUrl1).pipe(catchError((error)=>{
      console.error(error);
      return throwError(error);
    }));
  
  }
  getPFE(){
    return this.httpClient.get(this.ApiUrl2).pipe(catchError((error)=>{
      console.error(error);
      return throwError(error);
    }));
  
  }
  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8083/stages/${id}`);
  }
}
