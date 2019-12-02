import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface City {
  name: string;
  abbrv: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fromControl =  new FormControl('', [Validators.required]);
  toControl =  new FormControl('', [Validators.required]);
  cities: City[] = [
    {name: 'Atlanta', abbrv: 'ATL'},
    {name: 'Boston', abbrv: 'BOS'},
    {name: 'Charlotte', abbrv: 'CHR'},
    {name: 'Chicago', abbrv: 'CHI'},
    {name: 'Detroit', abbrv: 'DTR'},
    {name: 'Denver', abbrv: 'DNV'},
    {name: 'Houston', abbrv: 'HOU'},
    {name: 'Los Angeles', abbrv: 'LAX'},
    {name: 'Las Vegas', abbrv: 'LAV'},
    {name: 'New York City', abbrv: 'NYC'},
    {name: 'Miami', abbrv: 'MIA'},
    {name: 'Minneapolis', abbrv: 'MNN'},
    {name: 'Pheonix', abbrv: 'PHX'},
    {name: 'Philadelphia', abbrv: 'PHL'},
    {name: 'Pittsburgh', abbrv: 'PIT'},
    {name: 'San Francisco', abbrv: 'SFS'},
    {name: 'Seattle', abbrv: 'SEA'},
    {name: 'St. Louis', abbrv: 'STL'},
    {name: 'Washington DC', abbrv: 'WDC'},
  ];

  constructor() { }

  ngOnInit() { }

  onClick() { }

}
