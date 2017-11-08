import { Injectable } from '@angular/core';
import { Subscription} from 'rxjs/subscription';
import { Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

import { AuthService, TestService, UserService } from './index';

@Injectable()
export class HubService {
  public title = "Updraft POS";
  private pages = [
    {'title':'login', 'address':'login'},
    {'title':'welcome', 'address':'welcome'},
    {'title':'pos', 'address':'pos'},
    {'title':'inventory', 'address':'inventory'},
    {'title':'dashboard', 'address':'dashboard'}
  ];
  private lastLink: Object = {'label':'Log Out', 'address':'logout'};

  private headerLinks: BehaviorSubject<Array<any>> = 
                          new BehaviorSubject(this.pages);
  private isLoggedIn: BehaviorSubject<boolean> = 
                          new BehaviorSubject(false);
  public order;
  public customer;
  public products;

  constructor(public _as:AuthService, 
              public _u:UserService,
              public _test:TestService,
              private router:Router
            ) { 
    console.log('[ HubService.constructor...');
    this._u.user$.subscribe(res => {
      console.log('[ HubService._u.user$.subscribe');
      console.log('...received user update:');      
      console.dir(res);
      this.navigate('welcome');
    });
  }

  // Helper methods
  navigate(address:string) {
    this.router.navigate([address]);
  }
  
  // Getters
  get headerLinks$():Observable<Array<any>> { return this.headerLinks.asObservable(); }
  // get isLoggedIn():boolean {return !(this._as.authstate.getValue() == null);}
  get isLoggedIn$():Observable<any> { return this.isLoggedIn.asObservable(); }
  get user$():Observable<any> { return this._u.user.asObservable(); }

  // Setters
  updateHeaderLinks$(links:Array<any>) { 
    // set the last link (Input from parent) in links to "Log Out"
    links.push(this.lastLink);
    // update headerLinks to new list
    this.headerLinks.next(links); 
  }  

}
