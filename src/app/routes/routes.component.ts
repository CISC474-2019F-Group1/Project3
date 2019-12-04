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
  routeTimes = [];

  constructor(private http: HttpClient,
              private routesService: RoutesService,
              private authService: AuthService,
              public dialog: MatDialog) { }

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
      complete: () => this.helpFunc(),
    });
  }

  helpFunc(): void {
    console.log(this.routesList)
    for (let i = 0; i < this.routesList[0].trips.length; i++) {
      this.routeTimes.push({trip: this.routesList[0].trips[i][0]});
    }
    console.log(this.routeTimes);
  }

  resTicket(): void {
    $.post(`http://localhost:3000/api/getTicket`, this.routesList[0]);
    console.log('Ticket Reserved!');
  }

}

