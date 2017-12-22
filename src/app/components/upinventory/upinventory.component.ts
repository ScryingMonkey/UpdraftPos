import { Component, OnInit } from '@angular/core';

import { HubService } from '../../services/hub.service';
import { Product, TimeStamp } from '../../models/index';

@Component({
  selector: 'upinventory',
  templateUrl: './upinventory.component.html',
  styleUrls: ['./upinventory.component.css']
})
export class UpInventoryComponent implements OnInit {
  private product:Product;
  private productList:Array<any>;
  private editing: boolean;

  constructor(private _hub:HubService) {
    _hub._product.product$.subscribe(res => this.product = res);
    _hub._product.productList$.subscribe(res => this.productList = res);
   }

  ngOnInit() {
  }

  addProduct() {
    console.log("[ UpInventoryComponent.addProduct()...");
    this.editing = true;
    console.log("...editing = " +this.editing);
  }

}
