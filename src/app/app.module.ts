import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { AuthService, TestService, UserService, OrderService, ProductService } from './services/index';
import { HubService } from './services/hub.service';
import { UpHeaderDesktopComponent, UptoplinksComponent, UpheaderMobileComponent } from './components/upheader/index';
import { UpDashboardComponent, UpInventoryComponent, UpLoginComponent, UpOrderComponent, UpPosComponent, UpTestingfooterComponent, UpWelcomeComponent, UserPaneComponent } from "./components/index";
import { ItemDetailComponent } from './components/upinventory/item-detail/item-detail.component';
import { ProductListingComponent } from './components/upinventory/product-listing/product-listing.component';
import { NewProductDetailComponent } from './components/upinventory/new-product-detail/new-product-detail.component';

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
    UpheaderMobileComponent,
    ItemDetailComponent,
    ProductListingComponent,
    NewProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ProductService,
    // AngularFirestore,
    // AngularFirestoreDocument,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
