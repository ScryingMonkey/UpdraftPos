import { Component, OnInit } from '@angular/core';

import { HubService } from '../../services/hub.service';
import { Order, Item, TimeStamp } from '../../models/index';

@Component({
  selector: 'uppos',
  templateUrl: './uppos.component.html',
  styleUrls: ['./uppos.component.css']
})
export class UpPosComponent implements OnInit {
  private order: Order;
  private detail = "Details, details, details...";
  private item:Item;

  constructor(private _hub:HubService) {
    this._hub._o.order$.subscribe(res => this.order = res);
    this.order = new Order();
   }

  ngOnInit() {
  }

  click() {
    // remove item from order
  }
  mouseenter(item) {
    // update item detail with item that is hovered over
    this.item = item;
  }
  addItem(numEanucc13) {   
    this.item = this._hub._o.addItemByEanucc13(numEanucc13);
  }

}
