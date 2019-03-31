import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import Utils from './utility/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private httpClient: HttpClient
  ) { }

  checkValidateLogin(user: any) {
    /*const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
    }),
    requestOptions = {
      headers: headers
    };*/
    // return this.httpClient.get('url', requestOptions);
    return this.httpClient.get('assets/demo_files/login-user.json');
    /*return this.httpClient.post('url', user).pipe(
      map((
        response: Response) =>{
          console.log (response.json());
        }
      ),
      catchError(Utils.handleError)
    );*/
  }
}