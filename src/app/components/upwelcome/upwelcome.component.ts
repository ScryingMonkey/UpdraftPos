import { Component, OnInit } from '@angular/core';

import { HubService } from '../../services/hub.service';

@Component({
  selector: 'upwelcome',
  templateUrl: './upwelcome.component.html',
  styleUrls: ['./upwelcome.component.css']
})
export class UpWelcomeComponent implements OnInit {

  private welcomeLinks = [
    {label:'POS', address:'pos'},
    {label:'Inventory', address:'inventory'},
    {label:'Dashboard', address:'dashboard'}
  ];

  constructor( private _hub:HubService ) { 
  }

  ngOnInit() {
  }

  go(address) { 
    console.log("...in UpWelcomeComponent.go("+address+")");
    if(address === 'logout') {
      this._hub._as.logout();
    }
    this._hub.navigate(address);
  }

}
