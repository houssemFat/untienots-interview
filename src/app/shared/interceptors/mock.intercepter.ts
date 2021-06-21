// Remove this file when we use another stable mock
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';

const ACCOUNTS_MOCK: any = {
  "user@untienots.com": {
    role: 'user'
  },
  "admin@untienots.com": {
    role: 'admin'
  }
}

const MOVIES_MOCK = [
    {
      "id": 1,
      "name": "Aquaman",
      "price": 10,
      "on_display": false,
      "illustration": "aquaman.jpg"
    },
    {
      "id": 2,
      "name": "Batman VS Superman",
      "price": 10,
      "on_display": true,
      "illustration": "batman-vs-superman.jpg"
    },
    {
      "id": 3,
      "name": "Blade Runner",
      "price": 10,
      "on_display": false,
      "illustration": "blade-runner.jpg"
    },
    {
      "id": 4,
      "name": "Les gardiens de la galaxie",
      "price": 10,
      "on_display": true,
      "illustration": "gardiens-de-la-galaxie.jpg"
    },
    {
      "id": 5,
      "name": "Harry Potter",
      "price": 10,
      "on_display": false,
      "illustration": "harry-potter.jpg"
    },
    {
      "id": 6,
      "name": "Joken",
      "price": 10,
      "on_display": false,
      "illustration": "joker.jpg"
    },
    {
      "id": 7,
      "name": "Le parrain",
      "price": 10,
      "on_display": false,
      "illustration": "le-parrain.jpg"
    },
    {
      "id": 8,
      "name": "Sonic",
      "price": 10,
      "on_display": false,
      "illustration": "sonic.jpg"
    },
    {
      "id": 9,
      "name": "Spider Man",
      "price": 10,
      "on_display": false,
      "illustration": "spider-man.jpg"
    },
    {
      "id": 10,
      "name": "Tenet",
      "price": 10,
      "on_display": false,
      "illustration": "tenet.jpg"
    }
  ]
;

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MockInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (req.url.indexOf('auth') > -1) {
      let email: string = req.body.email;
      let response = ACCOUNTS_MOCK[email];
      return of(new HttpResponse({status: response ? 200 : 404, body: response ? response : null}));
    }
    if (req.url.indexOf('movies') > -1) {
      return of(new HttpResponse({status: 200, body: MOVIES_MOCK.filter(e => true)}));
    }
    return next.handle(req);
  }
}
