import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class TestService {
  private testing: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }
  
  updateTesting(bool:boolean) {
    console.log("[ TestService.updateTesting( "+bool+" )");
    this.testing.next(bool);
  }
  
  show(o){
    return JSON.stringify(o); 
  }

  get testing$() { return this.testing.asObservable(); }

}
