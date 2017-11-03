import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from "rxjs/Rx";

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth

@Injectable()
export class AuthService {
  public authstate: BehaviorSubject<any>;

  constructor(public _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(res => {
      this.authstate.next(res);
      console.log('..._afAuth.authState.subcribe...');
      console.dir(res);    
    });
  }
  loginWithEmail(email, password) { 
    this._afAuth.auth.signInWithEmailAndPassword(email, password)   
      .then(res => console.log('...logged in with email&password'))
      .catch(res => console.log('...failed to log in with email&password'));
  }
  loginWithFacebook() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log('...logged in with Facebook'))
      .catch(res => console.log('...failed to log in with Facebook'));
  }
  loginWithGoogle() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log('...logged in with Google'))
      .catch(res => console.log('...failed to log in with Google'));
  }
  loginWithTestUser() {
    this.authstate.next({displayName:"Test User", email:"test@test.com", providerId:"test", photoURL:"", uid:"0000"});
    console.log('...logged in with test user');
  }
  logout() { 
    this._afAuth.auth.signOut(); 
    console.log('...logged out');    
  }

  get authstate$() {return this._afAuth.authState;}

  loginTester() {
    console.log("[ AuthService testing method");
    console.log("......logged in user :"+this.authstate);
    if(this.authstate) { console.dir(this.authstate);
    } else { console.log('......authstate is null'); }
  }
}