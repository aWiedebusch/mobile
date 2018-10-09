import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    let seq =  this.api.get('orders', params).share();

    seq.subscribe(( res: any) => {
      if( res.status == 'success') {

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
