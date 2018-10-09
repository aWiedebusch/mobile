export class Item {

  constructor(name:string, order_id:string, price:number,
    order_date:string, delivery_date:string, img: string) {
    this.name = name;
    this.order_id = order_id;
    this.price = price;
    this.order_date = order_date;
    this.delivery_date = delivery_date;
    this.img = img;
  }

}

export interface Item {
  [prop: string]: any;
}
