import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from './route';
import { Observable } from 'rxjs';

@Injectable()
export class RoutesService {

    apiUrl = 'localhost:3000/api/routes';

    constructor(private http: HttpClient) {
    }

    getRoutes(): Observable<Route[]> {
        return this.http.get<Route[]>(this.apiUrl);
    }

}