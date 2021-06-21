import { Injectable } from '@angular/core';

@Injectable()
export class BaseModel {

  constructor() {
  }

  /**
   *
   */
  serialize(path: Array<string>): any {
    // TODO
    throw new Error('Must be implemented');
  }

}
