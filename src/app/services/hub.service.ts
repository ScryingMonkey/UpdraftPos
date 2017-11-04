import { Injectable } from '@angular/core';
import { Subscription} from 'rxjs/subscription';
import { Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

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
  public headerLinks: BehaviorSubject<Array<any>> = 
                          new BehaviorSubject(this.pages);
  public lastLink: Object = {'label':'Log Out', 'address':'logout'};

  public authstate;
  public user;
  public order;
  public customer;
  public products;

  constructor(public _as:AuthService, 
              public _u:UserService,
              public router:Router) { 
    console.log('[ HubService.constructor...');
    this._as.authstate$.subscribe(res => {
      this._u.updateUser(res);
      console.log('......updating user with new authstate');    
    });
    this._u.user$.subscribe(res => {
      this.user = res;
      console.log('......user updated.  Routing to Welcome page.');    
      this.navigate("welcome");    
    });
  }

  // Helper methods
  navigate(address:string) {
    this.router.navigate([address]);
  }

  logout() {
    console.log("...HubService.logout()");
    this._as.logout();
    this.router.navigate(['/logout']);
  }
  
  // Getters
  get headerLinks$():Observable<Array<any>> { return this.headerLinks.asObservable(); }
  get isLoggedIn():boolean {return !(this._as.authstate.getValue() == null);}
  get user$():Observable<any> { return this._u.user.asObservable(); }

  // Setters
  updateHeaderLinks$(links:Array<any>) { 
    // set the last link (Input from parent) in links to "Log Out"
    links.push(this.lastLink);
    // update headerLinks to new list
    this.headerLinks.next(links); 
  }  

}
