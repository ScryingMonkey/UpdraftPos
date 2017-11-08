import { Component, OnInit } from '@angular/core';

import { HubService } from '../../services/hub.service';

@Component({
  selector: 'app-uptestingfooter',
  templateUrl: './uptestingfooter.component.html',
  styleUrls: ['./uptestingfooter.component.css']
})
export class UpTestingfooterComponent {
  private testing:boolean;
  private user;

  constructor( private _hub:HubService ) { 
    this._hub._test.testing$.subscribe(res => this.testing = res);
    this._hub._u.user$.subscribe(res => this.user = res);
  }

}
