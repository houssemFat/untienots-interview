import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/observable';

export class BaseApiService {

  constructor(private http: HttpClient) {
  }

  /**
   */
  get(path: string, options: any = {}): Observable<any> {
    return this._sendRequest('GET', path, options);
  }

  /**
   *
   *
   */
  post(path: string, body: any = {}, options = {}): Observable<any> {
    const httpHeadersObject = Object.assign({}, {body}, options);
    return this._sendRequest('POST', path, httpHeadersObject);
  }


  /**
   *
   */
  private static _getFullPath(path: string): string {
    return environment.HOST_API + '/' + path;
  }

  /**
   * This function will be invoked internally.
   * Options is not the
   */
  private _sendRequest(method: string, path: string, options= {}): Observable<any> {
    options.headers = this.setHeaders();
    path = BaseApiService._getFullPath(path);
    return this.http.request(method, path, options);
  }

  /**
   * Function to set header
   * example :
   * Token
   * Request ID ......
   */
  private setHeaders(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', ''
    );
  }
}
