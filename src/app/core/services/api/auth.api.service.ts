import { Injectable } from '@angular/core';
import { BaseApiService } from './base.api.service';
import { Observable } from "rxjs";
import { API_AUTH_ROUTES } from "../../../shared/constants/api.routes";

export interface LoginFormParams {
  email: string;
  password: string;
  keep_me_logged_in: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends BaseApiService {

  /**
   *
   * @param body
   */
  login(body: LoginFormParams): Observable<any> {
    return this.post([API_AUTH_ROUTES.BASE, API_AUTH_ROUTES.LOGIN_PATH].join('/'), body);
  }



  // all other calls,
  // forgot password
  // register
  // reset password ....


}
