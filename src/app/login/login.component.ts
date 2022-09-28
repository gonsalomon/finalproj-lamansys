import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  defaultLoginData = {
    user: 'Gonza',
    pass: 'admin'
  }
  
  constructor() {
  }

  ngOnInit(): void {
  }
}
