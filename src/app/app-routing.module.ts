import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginPortalComponent } from './login/login-portal/login-portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RoutesUrl } from './routes-url';

const routesUrl = new RoutesUrl();

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: routesUrl.LOGIN
  },
  {
    path: routesUrl.LOGIN,
    component: LoginComponent
  },
  {
    path: routesUrl.LOGIN_PORTAL,
    component: LoginPortalComponent
  },
  {
    path: routesUrl.FORGOT_PASSWORD,
    component: ForgotPasswordComponent
  },
  {
    path: routesUrl.REGISTER,
    component: RegisterComponent
  },
  {
    path: routesUrl.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: routesUrl.LOGIN
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
