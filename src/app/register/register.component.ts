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

  fullName : FormControl;
  aadharNumber : FormControl;
  email : FormControl;
  mobile : FormControl;
  password : FormControl;
  rePassword : FormControl;

  constructor(
    private registerService: RegisterService
  ) {
    this.registerModel = new Register();
  }

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
  }

  createFormControl() {
    this.fullName = new FormControl( null, [ Validators.required ]);
    this.aadharNumber = new FormControl( null, [ Validators.required, Validators.pattern("^[0-9]{12}$")]);
    this.email = new FormControl( null, [ Validators.required, Validators.email ]);
    this.mobile = new FormControl( null, [ Validators.required, Validators.pattern("[0-9]{10}") ]);
    this.password = new FormControl( null, Validators.compose([
      Validators.minLength(8),
      Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{1,}$") // this is for at least one uppercase, one lowercase, one number validation
      ])); // "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$"
    this.rePassword = new FormControl( null, [ Validators.required ]);
  }

  createFormGroup() {
    this.registerFormGroup = new FormGroup({
      fullName : this.fullName,
      aadharNumber : this.aadharNumber,
      email : this.email,
      mobile : this.mobile,
      password : this.password,
      rePassword : this.rePassword
    })
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
