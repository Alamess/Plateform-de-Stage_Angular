import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  ApiUrl="http://localhost:8083/stage/getall"
  constructor(private httpClient:HttpClient) { }
  getall(){
    return this.httpClient.get(this.ApiUrl).pipe(catchError((error)=>{
      console.error(error);
      return throwError(error);
    }));
  }
}
