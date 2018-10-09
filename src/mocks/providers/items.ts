import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Part example",
    "profilePic": "assets/img/parts/Jeff2.png",
    "about": "Part description",
  };


  constructor() {
  //   let items = [
  //     {
  //       "name": "Part 1",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 1 description"
  //     },
  //     {
  //       "name": "Part 2",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 2 description"
  //     },
  //     {
  //       "name": "Part 3",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 3 description"
  //     },
  //     {
  //       "name": "Part 4",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 4 description"
  //     },
  //     {
  //       "name": "Part 5",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 5 description"
  //     },
  //     {
  //       "name": "Part 6",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 6 description"
  //     },
  //     {
  //       "name": "Part 7",
  //       "profilePic": "assets/img/parts/Jeff2.png",
  //       "about": "Part 7 description"
  //     }
  //   ];

  //   for (let item of items) {
  //     this.items.push(new Item(item));
  //   }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
