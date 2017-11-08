import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../models/index';

//https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md

// manages user object...
// user {
//   key: generated by model from email
//   displayname: pulled from authstate
//   email: pulled from authstate
//   userType: defines what user can see
// }

@Injectable()
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject(new User());
  private staticUser: User = new User();

  constructor(private _afdb:AngularFireDatabase, private _afAuth:AngularFireAuth) {
    this._afAuth.authState.subscribe(res => {
      console.log('[ UserService._afAuth.authState.subscribe...');
      console.dir(res);    
      if(res){
        console.log("...authstate is not null.");
        console.log("...pulling user data from authstate.")
        let authUpdate = this.pullUpdateFromAuthstate(res); // update data from authstate
        console.log('TODO!!...pulling user data from db.');
        let dbUpdate = this.pullUpdateFromDb(this.createUserKey(authUpdate.email)); // update data from db
        let update = Object.assign(authUpdate,dbUpdate);  // merge update objects
        this.updateUser(update);  // update user from update data
      } else {
        console.log("...authstate is null")
      }
    });
   }

  updateUser(update){
    console.log('[ UserService.updateUser...');    
    console.log('...updating user with update object:');
    console.dir(update);
    // let u = this.user.take(1).subscribe( (e) => u = e );
    let u:User = this.user.value;  // pull current user object
    // console.log('...pulled current user:');
    // console.dir(u);
    u.updateValues(update); // update user object from update object
    this.user.next(u); // replace current user with updated user object
    console.log('...user updated:');    
    // console.dir(this.user.value);  
  }
  pullUpdateFromAuthstate(authstate){
    console.log('[ UserService.pullUpdateFromAuthstate(authstate)...');        
    let update = {
      displayName: authstate.displayName,
      email: authstate.email,
      userType: "user"
    };
    return update;
  }
  pullUpdateFromDb(userKey:string){
    console.log('[ UserService.pullUpdateFromDb(userKey)...');            
    let update = {testDataFromDb: "TEST!"};
    //TODO: Pull user from userdb.  Update user object.
    //getUserFromDB(authstate.displayname);
    //https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
    return update;
  }

  // Helpers
  createUserKey(email){ 
    return email.replace('@','AT').replace('.','DOT'); 
  }
  // Getters
  get user$(){ return this.user.asObservable()}
  get showUser() {
    console.log('..._u.showUser:user');
    console.dir(this.user.getValue());
    return JSON.stringify(this.user.getValue()); 
  }
}
