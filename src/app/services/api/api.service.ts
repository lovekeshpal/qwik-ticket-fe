import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.append(key, params[key]);
    }
    return this.http.get(url, { params }).pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any): Observable<any> {
    return this.http.post<T>(url, body).pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any): Observable<any> {
    return this.http.put<T>(url, body).pipe(catchError(this.handleError));
  }

  delete<T>(url: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    for (const key in params) {
      httpParams = httpParams.append(key, params[key]);
    }

    return this.http.delete(url, { params }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client side or netwrok error
      errorMessage = `${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
