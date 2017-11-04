import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Observable} from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { AngularFireDatabase } from 'angularfire2/database';

//https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md
// const promise = db.list('items').remove();
// promise
//   .then(_ => console.log('success'))
//   .catch(err => console.log(err, 'You do not have access!'));

@Injectable()
export class UserService {
  public user: BehaviorSubject<any>;

  constructor(_afdb: AngularFireDatabase) {
   }

  updateUser(authstate){
    this.user.next("");
    //TODO: Pull user from userdb.  Update user object.
    //getUserFromDB(authstate.displayname);
    //https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
    console.log('...updating user from db');
    console.dir(this.user.getValue());
  }

  get user$(){ return this.user.asObservable()}
}
