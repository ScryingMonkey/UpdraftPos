import { Component, OnInit } from '@angular/core';

import { HubService } from '../../services/hub.service';
import { Order, Product, TimeStamp } from '../../models/index';

@Component({
  selector: 'uppos',
  templateUrl: './uppos.component.html',
  styleUrls: ['./uppos.component.css']
})
export class UpPosComponent implements OnInit {
  private order: Order;
  private detail = "Details, details, details...";
  private item:Product;

  constructor(private _hub:HubService) {
    this._hub._order.order$.subscribe(res => this.order = res);
    this.order = new Order();
   }

  ngOnInit() {
  }

  click(item) {
    // remove item from order
    this._hub._order.removeItem(item);
  }
  mouseenter(item) {
    // update item detail with item that is hovered over
    this.item = item;
  }
  addItem(numEanucc13) {   
    this.item = this._hub._order.addItemByEanucc13(numEanucc13);
  }

}
