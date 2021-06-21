import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";

// you can modify to fit your needs
interface HttpOptions {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  requireAuth?: boolean
  // add missed staff here if needed
}
@Injectable()
export class BaseApiService {

  constructor(private http: HttpClient) {
  }

  /**
   */
  get(path: string, options: HttpOptions = {}): Observable<any> {
    return this._sendRequest('GET', path, options);
  }

  /**
   *
   *
   */
  post(path: string, body: any = {}, options: HttpOptions = {}): Observable<any> {
    const httpHeadersObject = Object.assign({}, {body}, options);
    return this._sendRequest('POST', path, httpHeadersObject);
  }

  /**
   *
   */
  private static _getFullPath(path: string): string {
    return environment.API_HOST + '/' + path;
  }

  /**
   * This function will be invoked internally.
   * Options allow for http header customisation, object key value
   */
  private _sendRequest(method: string, path: string, options: HttpOptions = {}): Observable<any> {

    path = BaseApiService._getFullPath(path);
    // inject ath
    if (options.requireAuth) {
      options.headers = this.appendToken(options.headers);
    }
    return this.http.request(method, path, options);
  }

  /**
   * TODO, header can be an object or a HttpHeaders,
   * clarify more the method
   * Function to set header for auth purpose
   * example :
   * Token
   * Request ID ......
   */
  private appendToken(headers: any): HttpHeaders {
    return (headers || new HttpHeaders()).set('Authorization', '');
  }

  /**
   * Add other custom headers
   * request ids ....
   * progress
   * withCredential
   */
  private setOthersHeaders() {

  }
}
