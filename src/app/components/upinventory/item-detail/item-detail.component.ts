import { Component, OnInit } from '@angular/core';

import { HubService } from '../../../services/hub.service';
import { Product, TimeStamp } from '../../../models/index';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  private product:Product;
  
  constructor(private _hub:HubService) {
    _hub._product.product$.subscribe(res => this.product = res);
   }

  ngOnInit() {
  }

}
