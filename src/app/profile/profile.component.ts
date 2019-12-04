import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  private firstnameControl =  new FormControl('', []);
  private lastnameControl =  new FormControl('', []);
  private emailControl = new FormControl({value: '', disabled: true}, []);
  private passwordControl = new FormControl('', []);
  private password2Control = new FormControl('', []);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/userInfo').subscribe(res => {
      console.log(res);
      this.firstnameControl.setValue(res['firstname']);
      this.lastnameControl.setValue(res['lastname']);
      this.emailControl.setValue(res['email']);
    });
  }

}
