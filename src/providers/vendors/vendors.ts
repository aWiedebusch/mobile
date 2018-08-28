import { Injectable } from '@angular/core';

import { Vendor } from '../../models/vendor';
import { Api } from '../api/api';

@Injectable()
export class Vendors {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/vendors', params);
  }

  add(vendor: Vendor) {
  }

  delete(vendor: Vendor) {
  }

}
