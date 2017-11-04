import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { Router }   from '@angular/router';

import { TestService } from '../../services/test.service';
import { HubService } from '../../services/hub.service';

@Component({
  selector: 'app-uplogin',
  templateUrl: './uplogin.component.html',
  styleUrls: ['./uplogin.component.css'],
})
export class UpLoginComponent implements OnInit {  
  private auth: Subject<any>;
  private userName: string;
  
  constructor(private router: Router, private _hub:HubService, private _test:TestService) {
    console.log('[ UploginComponent.constructor');
    // _as.isLoggedIn$.subscribe(isLoggeIn => this.isLoggedIn = isLoggeIn);
  }

  ngOnInit() { 
    if(this._hub._as.authstate) {
      console.log('...already logged in.  Redirecting...');
      console.dir(this._hub._as.authstate);
      this.router.navigate( ['/loggedin'] );
    }
  }
  loginWithEmail() {  }
  loginWithGoogle() { this._hub._as.loginWithGoogle(); }
  loginWithFacebook() { this._hub._as.loginWithFacebook(); }
  logout() { this._hub._as.logout(); }
  loginTester() { this._hub._as.loginTester(); }

}