import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class OrderService {

  private order: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(_afdb: AngularFireDatabase) { 
    console.log('[ OrderService.constructor...');
    // this._ngdb.database.object('/PriceList/').subscribe(res => this.priceList = res);
  }

  // Getters
  getOrders(userId) {
    // let orders = this._afdb.database.list('/users/'+userId+'/orders/');
    // console.log('...OrderService.getOrders.orders: '+orders);
    // console.log(orders);
    // return orders;
  }

  // Setters
  
  //Helpers
  sendOrderToFirebase(ccData, userId, userEmail) {
      console.log('[ OrderService.sendOrder...');      
      let afOrder = {};
      console.log('...afOrder: ' +afOrder );
      console.dir(afOrder);
      // send afOrder to firebase
    //   this._afdb.database.list('/users/'+userId+'/orders/').push(afOrder);
      // _hub navigates view to accouts upon completion
  }

}
