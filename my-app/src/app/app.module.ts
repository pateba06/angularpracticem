import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloridaComponent } from './florida/florida.component';
import { KentuckyComponent } from './kentucky/kentucky.component';
import { AppRoutingModule } from './app-routing.module';
import { BadalComponent } from './badal/badal.component';

@NgModule({
  declarations: [
    AppComponent,
    FloridaComponent,
    KentuckyComponent,
    BadalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
