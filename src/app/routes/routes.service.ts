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
    reqroutes = '';

    constructor(private http: HttpClient) { }

    getRoutes(): Observable<Route[]> {
      if (this.reqroutes === '') {
        return this.http.get<Route[]>(`http://localhost:3000/api/routes`);
      } else {
        const dbroutes = this.http.get<Route[]>(`http://localhost:3000/api/routes`);
        const reqroutes = JSON.parse(this.reqroutes);

        for (let i = 0; i < reqroutes.length; i++) {

        }
      }
    }

}
