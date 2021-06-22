import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BaseApiService } from "@app-core/services/api/base.api.service";
import { API_MOVIES_ROUTES } from "@app-shared/constants/api.routes";

export interface ListMoviesParams {
  page?: string;
  q?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService extends BaseApiService {

  /**
   *
   * @param body
   */
  list(body: ListMoviesParams): Observable<any> {
    let path = [API_MOVIES_ROUTES.BASE, API_MOVIES_ROUTES.LIST_PATH].join('/') ;
    path += body.page ? ('page=' + body.page ): '';
    path += body.q ? ('q=' + body.q ): '';
    return this.get(path);
  }


  // all other calls,
  // forgot password
  // register
  // reset password ....


}
