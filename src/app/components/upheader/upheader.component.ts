import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HubService } from '../../services/hub.service';

@Component({
  selector: 'app-upheader',
  templateUrl: './upheader.component.html',
  styleUrls: ['./upheader.component.css'],
  providers: [ ]
})
export class UpHeaderComponent implements OnInit {
  title: string;
  links: Array<any>; // array of objects {label,address}.  labels are displayed.  address is handed to the router on click.
  private loggedIn:boolean = false;
  private user;

  constructor(private _hub: HubService) { 
    console.log('[ UpheaderComponent.constructor ]');
    this.title = this._hub.title;
    this._hub.headerLinks$.subscribe(res => this.links = res);
    // subscribe to the user object for the app
    this._hub._u.user$.subscribe(res => this.user = res );
  }

  ngOnInit() {
    // console.log('[ UpheaderComponent.ngOnInit() ]');
  }

  onClick(address) { 
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
