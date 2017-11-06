import { Component } from '@angular/core';

import { HubService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = this._hub.title;
  links = this._hub.headerLinks;
  loggedIn:boolean = false;

  constructor(private _hub: HubService) { 
    console.log('[ AppComponent.constructor...');
  }
}