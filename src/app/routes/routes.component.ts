import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
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
              private authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.routesService.getRoutes().subscribe({
      next: routes => {
        this.routesList = routes;
      },
      error: err => console.log('error: ' + err)
    });
  }
  
  formatDate(dateString: string){
    return new Date(dateString).toLocaleString();
  }

  ngOnDestroy(): void {
    this.routesService.clearParams();
  }

  resTicket(routeIndex: number, timeIndex: number): void {
    const route = this.routesList[routeIndex];
    const time = route.trips[timeIndex];
    
    const ticket = {
      startStation: route.startStation,
      destStation: route.destStation,
      startTime: time[0],
      destTime: time[1]
    }
    this.http.post('http://localhost:3000/api/getTicket', ticket).subscribe(_ => console.log('Ticket Reserved!'));
  }

}

