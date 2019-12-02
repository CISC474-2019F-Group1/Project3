import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test
    (window.location.host));
  constructor(private sharedSvc: TestService) { }
  from = '';
  to = '';
  public photoUrl: string;
  ngOnInit() {
  }
  onClick() {
    this.sharedSvc.sharedValue++;
  }
}

// export class SidenavModeExample {
//   mode = new FormControl('over');
//   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test
//     (window.location.host));
// }