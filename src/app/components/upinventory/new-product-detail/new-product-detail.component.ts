import { Component, OnInit } from '@angular/core';

import { HubService } from '../../../services/hub.service';
import { Product, TimeStamp } from '../../../models/index';

@Component({
  selector: 'new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.css']
})
export class NewProductDetailComponent implements OnInit {
  private product:Product;

  constructor(private _hub:HubService) {
    _hub._product.product$.subscribe(res => this.product = res);
  }

  ngOnInit() {
  }

}
