import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: Item[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.items.query(val).subscribe((resp :any) => {
      this.currentItems = resp.filter((item) => {
        if( item.name.indexOf(val) >= 0 ) {
          return true;
        }
        return false;
      });
    });
    return this.currentItems;
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
