import { Component, OnInit, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { HubService } from '../../../services/hub.service';
import { Product, TimeStamp } from '../../../models/index';

@Component({
  selector: 'new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.css']
})
export class NewProductDetailComponent implements OnInit {
  private product:Product= new Product();
  @Input() editingTitle;

  constructor(private _hub:HubService) {
    _hub._product.product$.subscribe(res => this.product = res);
  }

  ngOnInit() {  }

  saveNewProduct() { this._hub._product.saveNewProduct(this.product); }
  resetProduct() { this._hub._product.updateProduct(new Product().blank); }
  cancelProduct() { this._hub.editingNewProduct = false; }


}
