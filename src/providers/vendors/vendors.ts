import { Injectable } from '@angular/core';

import { Vendor } from '../../models/vendor';
import { Api } from '../api/api';

@Injectable()
export class Vendors {

  constructor(public api: Api) { }

  query(params?: any) {
    let seq =  this.api.get('vendors', params).share();
    var vendorList: Vendor[] = [];

    seq.subscribe(( res: any) => {
      for ( let v of res) {
        vendorList.push(new Vendor(v.name, v.location, ""));
      }
    }, err => {
      console.error('ERROR', err);
    });

    return vendorList;
  }

  add(vendor: Vendor) {
  }

  delete(vendor: Vendor) {
  }

}
