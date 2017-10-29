import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BtcheckoutformComponent } from './components/btcheckoutform/btcheckoutform.component';
import { UpaccountComponent } from './components/upaccount/upaccount.component';
import { UpcheckoutformComponent } from './components/upcheckoutform/upcheckoutform.component';
import { UpeditorderComponent } from './components/upeditorder/upeditorder.component';
import { UpheaderComponent } from './components/upheader/upheader.component';
import { UporderComponent } from './components/uporder/uporder.component';
import { UptestingfooterComponent } from './components/uptestingfooter/uptestingfooter.component';
import { BarrelofmonkeysComponent } from './components/uporder/barrelofmonkeys/barrelofmonkeys.component';
import { MonkeyskinComponent } from './components/uporder/barrelofmonkeys/monkeyskin/monkeyskin.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BtcheckoutformComponent,
    UpaccountComponent,
    UpcheckoutformComponent,
    UpeditorderComponent,
    UpheaderComponent,
    UporderComponent,
    UptestingfooterComponent,
    BarrelofmonkeysComponent,
    MonkeyskinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
