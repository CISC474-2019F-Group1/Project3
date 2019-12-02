import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

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

  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    $.ajax({
      url: `http://localhost:3000/api/routes`,
      contentType: 'application/json',
      type: 'GET',
      statusCode: {
        200(response) {
            routesList = response;
            console.log(response);
        }
      }

  });
  }

  getRoutes(): void {
    $.ajax({
      url: `http://localhost:3000/api/routes`,
      contentType: 'application/json',
      type: 'GET',
      statusCode: {
        200(response) {
            this.output = JSON.stringify(response);
            console.log(response);
        }
      }

  });
  }

}
