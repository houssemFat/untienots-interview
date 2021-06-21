import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';

enum MessageType {
  Error = 1,
  Warning,
  Info,
  Any,
}

@Injectable({
  providedIn : 'root'
})
export class LoggerService {

  constructor() {
  }

  /**
   *
   *
   */
  error(message: string, options: any) {
    this._print(MessageType.Error, message, options);
  }

  /**
   *
   *
   */
  info(message: string, options: any) {
    this._print(MessageType.Info, message, options);
  }

  /**
   *
   *
   */
  warn(message: string, options: any) {
    this._print(MessageType.Warning, message, options);
  }

  /**
   * Display or do what you want (api, use another service ...)
   */
  private _print(type: MessageType, message: string, options: any) {
    if (environment.production) {
      // you can send this info to backend or any other provider to collect analytics
    } else {
      this._printToConsole(type, message, options);
    }
  }

  /**
   * You can print to console with design
   * https://developer.mozilla.org/en-US/docs/Web/API/console#usage
   */
  private _printToConsole(type: MessageType, message: string, options: any) {
    // TODO
  }
}
