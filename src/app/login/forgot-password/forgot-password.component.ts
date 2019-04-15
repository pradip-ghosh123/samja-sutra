import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutesUrl } from 'src/app/routes-url';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotFormGroup: FormGroup;
  email: string;
  resetLinkSent = false;
  routesUrl = new RoutesUrl();

  constructor(private router: Router) {
    this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    this.forgotFormGroup = new FormGroup({
      email : new FormControl( null, [ Validators.required, Validators.email ])
    })
  }

  onPasswordResetClick() {
    this.resetLinkSent = true;
  }

  redirectToLogin() {
    const path = this.routesUrl.LOGIN;
    this.router.navigate([path]);
  }

}
