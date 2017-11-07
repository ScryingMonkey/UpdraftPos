import { Component, OnInit } from '@angular/core';

import { TestService } from '../../services/test.service';
import { HubService } from '../../services/hub.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-uporder',
  templateUrl: './uporder.component.html',
  styleUrls: ['./uporder.component.css'],
  providers: []
})
export class UpOrderComponent implements OnInit {
  private showBom: boolean;
  private showCheckoutForm: boolean;
  private bom: Array<any>;
  

  constructor( private _test:TestService, private _order:OrderService, private _hub:HubService) { 
    console.log('[ UporderComponent.constructor...');
  }

  ngOnInit() { 
    console.log('[ UporderComponent.ngOnInit()...');
    // if(!this._hub.isLoggedIn) {
    //   console.log('...not logged in.  Redirecting...');
    //   this._hub.navigate('/login');
    // }
  }

 // https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

 test() {
   console.log('...UporderComponent test button clicked');
 }

}
