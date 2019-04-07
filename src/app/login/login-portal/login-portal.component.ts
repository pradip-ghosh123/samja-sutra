import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../model/login';
import { RoutesUrl } from 'src/app/routes-url';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  userTypeValue: number;
  userTypeName: string;
  loginFormGroup: FormGroup;
  isSuccess: boolean = false;
  loginModel: Login;
  routesUrl = new RoutesUrl();

  constructor(private acivatedRoute: ActivatedRoute,
    private router: Router,
    private authenticateService: AuthenticateService) {
      this.loginModel = new Login();
      this.acivatedRoute.params.subscribe((params: Params) => {
        if (params['usertype'] !== undefined) {
          this.userTypeValue = parseInt(params['usertype']);
          this.userTypeName = this.findUserTypeName(this.userTypeValue);
        }
        if (this.userTypeName === null || this.userTypeValue === undefined) {
          this.router.navigate([this.routesUrl.LOGIN]);
        }
      });
  }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  findUserTypeName(value: number) {
    let name = null;
    if (value === 1) {
      name = 'Individual';
    } else if (value === 2) {
      name = 'Social';
    } else if (value === 3) {
      name = 'Institute';
    }
    return name;
  }

  doLogin() {
    if (this.loginFormGroup.valid && this.userTypeName) {
      const obj = {
        'user_name' : this.loginModel.userName,
        'password' : this.loginModel.password,
        'user_type' : this.userTypeValue,
      }
      this.authenticateService.checkValidateLogin(obj)
      .subscribe(
        (data: any) => {
          if (data.user_name === this.loginModel.userName.trim() && data.password === this.loginModel.password.trim()) {
            this.isSuccess = true;
            this.router.navigate([this.routesUrl.DASHBOARD]);
          } else {
            this.isSuccess = false;
          }
          console.log(data);
        }
      );
    }
  }

  onForgotPasswordClick() {
    this.router.navigate([this.routesUrl.FORGOT_PASSWORD]);
  }

}
