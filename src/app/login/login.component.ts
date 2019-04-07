import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesUrl } from '../routes-url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  routesUrl = new RoutesUrl();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginasClick(userType: number) {
    if (userType) {
      this.router.navigate([this.routesUrl.LOGIN, userType]);
    }
  }

}
