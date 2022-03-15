import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Customer1 } from './customer-1';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Ap1Service {
  ap1URL: string = 'http://jsonplaceholder.typicode.com/users';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
  constructor(private http:HttpClient) { }
  getCustomers(): Observable<Customer1> {
  return this.http.get<Customer1>(this.ap1URL)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
 handleError(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     // Get client-side error
     errorMessage = error.error.message;
   } else {
     // Get server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
 }
}
