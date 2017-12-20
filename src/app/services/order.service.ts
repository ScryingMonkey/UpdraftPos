import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { AngularFireDatabase } from 'angularfire2/database';

import { Order, Product } from '../models/index';


@Injectable()
export class OrderService {

  private order: BehaviorSubject<Order> = new BehaviorSubject(new Order());

  constructor(private _afdb: AngularFireDatabase) { 
    console.log('[ OrderService.constructor...');
    // this._ngdb.database.object('/PriceList/').subscribe(res => this.priceList = res);
  }

  //Helpers
  totalOrder(o):number {
    let total = 0.00;
    o.items.forEach(el => {
      total += el.price*100;
    });
    return total/100;
  }
  pullItemFromDB(eanucc13:number):Product {
    let item = new Product();
    // Pull item from database by eanucc13 number
    console.log("...TODO!! Pull item from database by eanucc13 number.");
    return item;
  }
  sendOrderToFirebase(order:Order):boolean {
      console.log('[ OrderService.sendOrderToFirebase...');   
      console.log('...order: ');
      console.dir(order);
      // send afOrder to firebase
      console.log("...TODO!! Send order to db");
      // this._afdb.database. list('/users/'+userId+'/orders/').push(afOrder);
      // Verify that db update was successful.   
      console.log("...TODO!! Verifiy that order is now in db.");
      let result = false;     
      // navigate to next screen
      console.log("...TODO!! Navigate to the next screen.  Payment?  Blank POS?");
      // return boolean for whether db update was successful.
      console.log("...TODO!! return whether db update suceeded.");
      return result;
  }
  // Getters
  get order$() { return this.order.asObservable(); }
  getOrderFromDB() {
    // let orders = this._afdb.database.list('/users/'+userId+'/orders/');
    // console.log('...OrderService.getOrders.orders: '+orders);
    // console.log(orders);
    // return orders;
  }

  // Setters
  updateOrder(order:Order) { this.order.next(order); }
  updateOrderAttrib(key:string, value:any) {
    let o = this.order.value;
    o[key] = value;
    this.updateOrder(o);
  }
  addItem(item:Product) { 
    let o = this.order.value;
    o.items.push(item);
    o.total = this.totalOrder(o);
    this.updateOrder(o);
  }
  addItemByEanucc13(eanucc13:number):Product {
    console.log('[ OrderService.addItemByEanucc13('+ eanucc13 +')...');
    let i = new Product();
    // lookup item in database
    console.log("...TODO!! Lookup item in database.  Using new Item() for now.")
    this.addItem(i);
    return i;
  }
  removeItem(item:Product):Product {
    let eanucc13 = item.eanucc13;
    let o = this.order.value;
    for (var i = 0; i < o.items.length; i++) {
      if(o.items[i].eanucc13 == eanucc13){
        o.items.splice(i,1);
        item = o.items[i];
      }
    }
    o.total = this.totalOrder(o);
    this.updateOrder(o);
    return item;
  }
}