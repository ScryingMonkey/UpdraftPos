import { Component, Input, OnInit } from '@angular/core';

import { HubService } from '../../../services/hub.service';
import { Product, TimeStamp } from '../../../models/index';

@Component({
  selector: 'product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  @Input() product:Product;
  private editing:boolean = false;

  constructor(private _hub:HubService) {
  }

  ngOnInit() {
  }

  clickListing() { 
    this._hub._product.updateProduct(this.product);
    this.editing = !this.editing;
  }

  save() {
    this.editing = false;
  }

}
