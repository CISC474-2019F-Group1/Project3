import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loggedIn;

  constructor() {
    this.loggedIn = false;
  }

  setLoggedIn(val: boolean) {
    this.loggedIn = val;
  }

  getLoggedIn() {
    return this.loggedIn;
  }

  
}
