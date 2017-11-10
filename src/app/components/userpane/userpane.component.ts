import { Component, OnInit } from '@angular/core';
import { HubService } from '../../services/hub.service';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.css']
})
export class UserPaneComponent implements OnInit {
  private user;

  constructor( private _hub:HubService ) { 
    this._hub._u.user$.subscribe( res => this.user = res );
  }

  ngOnInit() {
  }

}
