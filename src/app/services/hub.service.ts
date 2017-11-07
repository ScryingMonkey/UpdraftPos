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
              public _test:TestService,
              public router:Router
            ) { 
    console.log('[ HubService.constructor...');
    this._as.authstate$.subscribe(res => {
      console.log('[ HubService._as.authstate$.subscribe');
      if(res){
        console.log('...updating user with new authstate');    
        console.dir(res);
        console.log('......routing to Welcome page.');  
        this.navigate("welcome");          
        this._u.updateUser(res);
      }else{
        console.log('...authstate is null.');
        this.navigate("login");        
      }
    });
    this._u.user$.subscribe(res => {
      console.log('[ HubService._u.user$.subscribe');      
      this.user = res;
      console.log('...updating user');          
      console.dir(res);
    });
  }

  // Helper methods
  navigate(address:string) {
    this.router.navigate([address]);
  }

  loginWithGoogle(){
    this._as.loginWithGoogle();
  }

  logout() {
    console.log("...HubService.logout()");
    this._as.logout();
    this.router.navigate(['/logout']);
  }
  
  // Getters
  get headerLinks$():Observable<Array<any>> { return this.headerLinks.asObservable(); }
  // get isLoggedIn():boolean {return !(this._as.authstate.getValue() == null);}
  get user$():Observable<any> { return this._u.user.asObservable(); }

  // Setters
  updateHeaderLinks$(links:Array<any>) { 
    // set the last link (Input from parent) in links to "Log Out"
    links.push(this.lastLink);
    // update headerLinks to new list
    this.headerLinks.next(links); 
  }  

}
