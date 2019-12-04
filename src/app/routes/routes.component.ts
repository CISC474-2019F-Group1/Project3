import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { Route } from './route';
import { RoutesService } from './routes.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  providers: [RoutesService],
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit, OnDestroy {

  routesList = [];

  constructor(private http: HttpClient,
              private routesService: RoutesService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getRoutes();
  }

  ngOnDestroy(): void {
    this.routesService.clearParams();
  }

  getRoutes(): void {
    this.routesService.getRoutes().subscribe({
      next: x => this.routesList = x,
      error: err => console.log('error: ' + err),
      complete: () => console.log(this.routesList),
    });
  }

  resTicket(): void {
    console.log('Ticket Reserved!');
  }

}
