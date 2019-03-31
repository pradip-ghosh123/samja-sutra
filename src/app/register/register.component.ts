import { Component, OnInit } from '@angular/core';
import { Register } from './model/register';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerModel: Register;
  registerFormGroup: FormGroup;

  constructor(
    private registerService: RegisterService
  ) {
    this.registerModel = new Register();
  }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      fullName: new FormControl(null, [Validators.required]),
      aadharNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      rePassword: new FormControl(null, [Validators.required]),
      // otp: new FormControl(null, [Validators.required])
    });
  }

  doRegister() {
    if (this.registerFormGroup.valid) {
      const obj = {
        'fullName' : this.registerModel.fullName,
        'aadharNumber' : this.registerModel.aadharNumber,
        'email' : this.registerModel.email,
        'mobile' : this.registerModel.mobile,
        'password' : this.registerModel.password,
      }
      this.registerService.registerUser(obj)
      .subscribe(
        (data: any) => {
          console.log('Registration successful.');
          console.log(data);
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
