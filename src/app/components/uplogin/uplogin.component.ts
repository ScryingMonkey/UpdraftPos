import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';

import { TestService, HubService } from '../../services/index';

@Component({
  selector: 'app-uplogin',
  templateUrl: './uplogin.component.html',
  styleUrls: ['./uplogin.component.css'],
})
export class UpLoginComponent implements OnInit {  
  
  constructor(private _hub:HubService, private _test:TestService) {
    console.log('[ UploginComponent.constructor');
  }

  ngOnInit() { 
    if(this._hub._as.authstate) {
      console.log('...already logged in.  Redirecting...');
      console.dir(this._hub._as.authstate);
      this._hub.router.navigate( ['/loggedin'] );
    }
  }
  loginWithEmail(email,password) { this._hub._as.loginWithEmail(email, password); }
  loginWithGoogle() { this._hub._as.loginWithGoogle(); }
  loginWithFacebook() { this._hub._as.loginWithFacebook(); }
  logout() { this._hub._as.logout(); }
  loginTester() { this._hub._as.loginTester(); }

}