import { Component, OnInit } from '@angular/core';

import { Route } from './route';
import { RoutesService } from './routes.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  providers: [RoutesService],
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes: Route[];

  constructor(private routesService: RoutesService) { }

  ngOnInit() {
    this.getRoutes();
  }

  getRoutes(): void {
    this.routesService.getRoutes()
      .subscribe((data: Route[]) => this.routes = { ...data });
  }

}
