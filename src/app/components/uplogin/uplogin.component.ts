import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';

import { HubService } from '../../services/hub.service';

@Component({
  selector: 'app-uplogin',
  templateUrl: './uplogin.component.html',
  styleUrls: ['./uplogin.component.css'],
})
export class UpLoginComponent implements OnInit {  
  
  constructor(private _hub:HubService) {
    console.log('[ UploginComponent.constructor');
    // if(this._hub._as.authstate !== null) {
    //   console.log('...already logged in.  Redirecting...');
    //   console.dir(this._hub._as.authstate.getValue());
    //   this._hub.router.navigate( ['/welcome'] );
    // }
  }

  ngOnInit() { 
    // if(this._hub._as.authstate) {
    //   console.log('...already logged in.  Redirecting...');
    //   console.dir(this._hub._as.authstate);
    //   this._hub.router.navigate( ['/loggedin'] );
    // }
  }
  loginWithEmail(email,password) { 
    console.log("[UpLoginComponent.loginWithEmail("+email+", "+password+")");
    this._hub._as.loginWithEmail(email, password); 
  }
  loginWithGoogle() { this._hub.loginWithGoogle(); }
  loginWithFacebook() { this._hub._as.loginWithFacebook(); }
  logout() { this._hub.logout(); }
  // loginTester() { this._hub._as.loginTester(); }

}