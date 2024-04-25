import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  ApiUrl="http://localhost:8083/mail/send"
  constructor(private httpClient:HttpClient) {
   }
   sendmail(file:File,to:any,subject:any,body:any){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);

    return this.httpClient.post(this.ApiUrl, formData,{ responseType: 'text' }).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
   }
}
