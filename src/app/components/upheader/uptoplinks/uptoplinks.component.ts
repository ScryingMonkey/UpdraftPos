import { Component, OnInit } from '@angular/core';
import { HubService } from '../../../services/hub.service';

@Component({
  selector: 'uptoplinks',
  templateUrl: './uptoplinks.component.html',
  styleUrls: ['./uptoplinks.component.css']
})
export class UptoplinksComponent implements OnInit {
  private links: Array<any>; // array of objects {label,address}.  labels are displayed.  address is handed to the router on click.
  private isLoggedIn:boolean;

  constructor(private _hub:HubService) { 
    console.log("[ UptoplinksComponent.constructor...");    
    this._hub._u.isLoggedIn$.subscribe(res => this.isLoggedIn = res);    
    this._hub.headerLinks$.subscribe(res => {
      console.log("...in UptoplinksComponent._hub.headerLinks$.subscribe");    
      this.links = res;
      console.dir(this.links);        
    });    
  }

  ngOnInit() {
  }

  go(address) { 
    console.log("...in UptoplinksComponent.go("+address+")");
    if(address === 'logout') {
      this._hub._as.logout();
    }
    this._hub.navigate(address);
  }

}
