import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UpRoutes } from "./app.routes";
import { AppComponent } from './app.component';

import { HubService } from './services/hub.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { UpLoginComponent } from './components/uplogin/uplogin.component';
import { UpHeaderComponent } from './components/upheader/upheader.component';
import { UpOrderComponent } from './components/uporder/uporder.component';
import { UpTestingfooterComponent } from './components/uptestingfooter/uptestingfooter.component';
import { UpWelcomeComponent } from './components/upwelcome/upwelcome.component';
import { UpPosComponent } from './components/uppos/uppos.component';
import { UpDashboardComponent } from './components/updashboard/updashboard.component';
import { UpInventoryComponent } from './components/upinventory/upinventory.component';

@NgModule({
  declarations: [
    AppComponent,
    UpLoginComponent,
    UpHeaderComponent,
    UpOrderComponent,
    UpTestingfooterComponent,
    UpWelcomeComponent,
    UpPosComponent,
    UpDashboardComponent,
    UpInventoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      UpRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    HubService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
