import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { RoutesService } from './routes.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.routesService.getRoutes().subscribe({
      next: routes => {
        this.routesList = routes;
      },
      error: err => console.log('error: ' + err)
    });
  }

  formatDate(dateString: string) {
    return new Date(dateString).toLocaleString();
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
    console.log(this.routesList);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.routesList[0].trips.length; i++) {
      this.routeTimes.push({trip: this.routesList[0].trips[i][0]});
    }
    console.log(this.routeTimes);
  }

  resTicket(routeIndex: number, timeIndex: number): void {
    const route = this.routesList[routeIndex];
    const time = route.trips[timeIndex];
    document.getElementById(`btn${routeIndex}`).classList.add('disable');

    const ticket = {
      startStation: route.startStation,
      destStation: route.destStation,
      startTime: time[0],
      destTime: time[1]
    };
    this.http.post('http://localhost:3000/api/getTicket', ticket).subscribe(_ => console.log('Ticket Reserved!'));
    this.snackBar.open('Your ticket has been reserved', '', { duration: 3000 });
  }

}

