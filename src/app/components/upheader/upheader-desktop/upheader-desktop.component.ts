import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HubService } from '../../../services/hub.service';

@Component({
  selector: 'upheader-desktop',
  templateUrl: './upheader-desktop.component.html',
  styleUrls: ['./upheader-desktop.component.css'],
  providers: [ ]
})
export class UpHeaderDesktopComponent implements OnInit {
  title: string;
  private isLoggedIn:boolean = false;
  private user;

  constructor(private _hub: HubService) { 
    console.log('[ UpheaderComponent.constructor ]');
    this.title = this._hub.title;
    this._hub._u.isLoggedIn$.subscribe(res => this.isLoggedIn = res);
    // subscribe to the user object for the app
    this._hub._u.user$.subscribe(res => this.user = res );
  }

  ngOnInit() {
    // console.log('[ UpheaderComponent.ngOnInit() ]');
  }

  go(address) { 
    console.log("...in UpheaderComponent.onClick("+address+")");
    if(address === 'logout') {
      this._hub._as.logout();
    }
    this._hub.navigate(address);
  }
  logout() {
    this._hub._as.logout();
  }

}
