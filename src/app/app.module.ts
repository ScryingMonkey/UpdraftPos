import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BtCheckoutFormComponent } from './components/btcheckoutform/btcheckoutform.component';
import { UpaccountComponent } from './components/upaccount/upaccount.component';
import { UpCheckoutForm } from './components/upcheckoutform/upcheckoutform.component';
import { UpeditorderComponent } from './components/upeditorder/upeditorder.component';
import { UpheaderComponent } from './components/upheader/upheader.component';
import { UporderComponent } from './components/uporder/uporder.component';
import { UptestingfooterComponent } from './components/uptestingfooter/uptestingfooter.component';
import { BarrelOfMonkeysComponent } from './components/uporder/barrelofmonkeys/barrelofmonkeys.component';
import { MonkeySkinComponent } from './components/uporder/barrelofmonkeys/monkeyskin/monkeyskin.component';

@NgModule({
  declarations: [
    AppComponent,
    BtCheckoutFormComponent,
    UpaccountComponent,
    UpCheckoutForm,
    UpeditorderComponent,
    UpheaderComponent,
    UporderComponent,
    UptestingfooterComponent,
    BarrelOfMonkeysComponent,
    MonkeySkinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
