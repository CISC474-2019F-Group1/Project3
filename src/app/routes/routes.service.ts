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
const params = [];

@Injectable({
  providedIn: 'root',
})

export class RoutesService {

    constructor(private http: HttpClient) { }

    getRoutes(): Observable<Route[]> {
      console.log(params);
      if (params.length < 2) {
        return this.http.get<Route[]>(`http://localhost:3000/api/routes`);
      } else {
        return this.http.get<Route[]>(`http://localhost:3000/api/path/${params[0]}${params[1]}/${params[2]}`);
      }
    }

    setParams(fromAbbr: string, toAbbr: string, timeVal: number) {
      params[0] = fromAbbr;
      params[1] = toAbbr;
      params[2] = timeVal;
      console.log(params);
    }

    getParams(): string[] {
      return params;
    }
}
