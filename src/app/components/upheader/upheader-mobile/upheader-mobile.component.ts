import { Component, OnInit } from '@angular/core';
import { HubService } from '../../../services/hub.service';

@Component({
  selector: 'upheader-mobile',
  templateUrl: './upheader-mobile.component.html',
  styleUrls: ['./upheader-mobile.component.css']
})
export class UpheaderMobileComponent implements OnInit {
  title: string;
  
  constructor(private _hub:HubService) {    
    this.title = this._hub.title;
  }

  ngOnInit() {
  }

}
