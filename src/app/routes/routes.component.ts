import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Route } from './route';
import { RoutesService } from './routes.service';

let routesList: Route[];

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  providers: [RoutesService],
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routesList = [];
  error: any;

  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routesService.getRoutes()
    .subscribe(
      (data: Route[]) => this.routesList = { ...data },
       error => this.error = error
    );
  }

}
