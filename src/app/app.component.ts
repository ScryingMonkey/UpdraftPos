import { Component, AfterViewInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

import { HubService } from './services/hub.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  private $resizeEvent:Observable<number>;
  private width; 
  
  constructor(private _hub:HubService) {
    this._hub.$screenWidth.subscribe(res => this.width = res);
    this.$resizeEvent = 
    Observable.fromEvent(window, 'resize', ()=>document.documentElement.clientWidth)
      .debounceTime(200);
    this.$resizeEvent.subscribe(res => this._hub.updateScreenWidth(res));
  }

  ngAfterViewInit() { this.width = document.documentElement.clientWidth; }
}
