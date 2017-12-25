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
  private editingTitle: string;

  constructor(private _hub:HubService) {
    _hub._product.product$.subscribe(res => this.product = res);
    _hub._product.productList$.subscribe(res => this.productList = res);
   }

  ngOnInit() {  }

  
  newProduct() {
    console.log("[ UpInventoryComponent.newProduct()...");
    this._hub._product.updateProduct(new Product().blank);
    this.editingTitle = "New Product"    
    this._hub.editingNewProduct = true;
    console.log("...editing = " +this._hub.editingNewProduct);
  }
  editProduct() {
    console.log("[ UpInventoryComponent.editProduct()...");
    this.editingTitle = "Edit Product"    
    this._hub.editingNewProduct = true;
    console.log("...editing = " +this._hub.editingNewProduct);
  }
}
