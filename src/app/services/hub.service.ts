import { Injectable } from '@angular/core';
import { Subscription} from 'rxjs/subscription';
import { Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";
import { Router }   from '@angular/router';

import { AuthService, TestService, UserService, OrderService, ProductService } from './index';

@Injectable()
export class HubService {
  public title = "Updraft POS";
  private pages = [
    {'label':'login', 'address':'login'},
    {'label':'welcome', 'address':'welcome'},
    {'label':'pos', 'address':'pos'},
    {'label':'inventory', 'address':'inventory'},
    {'label':'dashboard', 'address':'dashboard'}
  ];
  private lastLink: Object = {'label':'Log Out', 'address':'logout'};
  private headerLinks: BehaviorSubject<Array<any>> = 
                          new BehaviorSubject(this.pages);
  private isLoggedIn: BehaviorSubject<boolean> = 
                          new BehaviorSubject(false);
  private screenWidth:BehaviorSubject<number> = new BehaviorSubject(500);
  public editingNewProduct:boolean = false;  
  public user;
  public order;
  public customer;
  public products;
  
  
  constructor(public _as:AuthService, 
              public _u:UserService,
              public _order:OrderService,
              public _product:ProductService,
              public _test:TestService,
              private router:Router
            ) { 
    console.log('[ HubService.constructor...');
    this._u.isLoggedIn$.subscribe(res => {
      console.log('[ HubService._u.isLoggedIn$.subscribe');
      console.log('...received update:');      
      console.dir(res);
      if (res) {
        console.log('...logged in, navigating to "welcome".');          
        this.navigate('welcome');
      } else {
        console.log('...not logged in, navigating to "login".');                  
        this.navigate('login');
      }
    });
    this._order.order$.subscribe
    this._u.user$.subscribe(res => {
      this._order.updateOrderAttrib('employeeKey', res.key);
    });
  }

  // Helper methods
  navigate(address:string) {
    this.router.navigate([address]);
  }
  
  // Getters
  get headerLinks$():Observable<Array<any>> { return this.headerLinks.asObservable(); }
  get screenWidth$():Observable<number> { return this.screenWidth.asObservable(); }
  // Setters
  updateScreenWidth(w:number){ this.screenWidth.next(w);}
  updateHeaderLinks$(links:Array<any>) { 
    // set the last link (Input from parent) in links to "Log Out"
    links.push(this.lastLink);
    // update headerLinks to new list
    this.headerLinks.next(links); 
  } 

}
