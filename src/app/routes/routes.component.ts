import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import { Route } from './route';
import { RoutesService } from './routes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  providers: [RoutesService],
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routesList = [];

  constructor(private http: HttpClient, private routesService: RoutesService) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routesService.getRoutes().subscribe({
      next: x => this.routesList = x,
      error: err => console.log('error: ' + err),
      complete: () => console.log(this.routesList),
    });
  }

}
