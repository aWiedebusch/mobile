import { Injectable } from '@angular/core';

import { Vendor } from '../../models/vendor';

@Injectable()
export class Vendors {
  vendors: Vendor[] = [];

  defaultVendor: Vendor = {
    "name": "Vendor1",
    "location": "Here",
    "dBaseURL": "/thisURL",
  };


  constructor() {
    let vendors = [
      {
        "name": "Vendor1",
        "location": "Here",
        "dBaseURL": "/thisURL",
      },
      {
        "name": "Vendor2",
        "location": "There",
        "dBaseURL": "/thatURL",
      },
      {
        "name": "Vendor3",
        "location": "Weast",
        "dBaseURL": "/weastURL",
      }
    ];

    for (let vendor of vendors) {
      this.vendors.push(new Vendor(vendor));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.vendors;
    }

    // return this.vendors.filter((vendor) => {
    //   for (let key in params) {
    //     let field = vendor[key];
    //     if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
    //       return vendor;
    //     } else if (field == params[key]) {
    //       return vendor;
    //     }
    //   }
    //   return null;
    // });
  }

  add(vendor: Vendor) {
    this.vendors.push(vendor);
  }

  delete(vendor: Vendor) {
    this.vendors.splice(this.vendors.indexOf(vendor), 1);
  }
}
