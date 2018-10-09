import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    let seq =  this.api.get('orders', params).share();

    var itemsList: Item[] = [];

    seq.subscribe(( res: any) => {
      for ( let i of res) {
          itemsList.push(new Item(i.name, i.order_id, i.price, i.order_date, i.delivery_date, i.img));
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
