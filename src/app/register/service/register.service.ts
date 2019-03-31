import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import Utils from 'src/app/utility/utils';
import { BackendApiConfig } from 'src/app/backend-api-config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(user: any) {
    /*const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('access_token')
    }),
    requestOptions = {
      headers: headers
    };*/
    return this.httpClient.post(BackendApiConfig.REGISTER_URL, user).pipe(
      map((
        response: Response) =>{
          console.log (response.json());
        }
      ),
      catchError(Utils.handleError)
    );
  }
}
