import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPasswordForm: FormGroup;
  email: FormControl;

  constructor() { }

  ngOnInit() {
  	this.createFormControl();
	this.createFormGroup();
  }

  createFormControl() {
  	this.email = new FormControl( null, [ Validators.required, Validators.email])
  }
  createFormGroup() {
  	this.forgotPasswordForm = new FormGroup({
  		email: this.email
  	})
  }

}
