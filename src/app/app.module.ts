import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UpRoutes } from "./app.routes";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService, TestService, UserService, OrderService } from './services/index';
import { HubService } from './services/hub.service';
import { UpHeaderDesktopComponent, UptoplinksComponent, UpheaderMobileComponent } from './components/upheader/index';
import { UpDashboardComponent, UpInventoryComponent, UpLoginComponent, UpOrderComponent, UpPosComponent, UpTestingfooterComponent, UpWelcomeComponent, UserPaneComponent } from "./components/index";

@NgModule({
  declarations: [
    AppComponent,
    UpLoginComponent,
    UpHeaderDesktopComponent,
    UpOrderComponent,
    UpTestingfooterComponent,
    UpWelcomeComponent,
    UpPosComponent,
    UpDashboardComponent,
    UpInventoryComponent,
    UserPaneComponent,
    UptoplinksComponent,
    UpheaderMobileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(
      UpRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HubService,
    AuthService,
    UserService,
    OrderService,
    TestService,
    // AngularFirestore,
    // AngularFirestoreDocument,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
