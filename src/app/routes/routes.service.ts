import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Route } from './route';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000/api/routes'
    })
  };

@Injectable()
export class RoutesService {

    apiUrl = 'localhost:3000/api/routes';

    constructor(private http: HttpClient) { }

    getRoutes(): Observable<Route[]> {
        return this.http.get<Route[]>(`http://localhost:3000/api/routes`);
    }

}
