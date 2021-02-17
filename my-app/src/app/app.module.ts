import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FloridaComponent } from './florida/florida.component';
import { KentuckyComponent } from './kentucky/kentucky.component';
import { AppRoutingModule } from './app-routing.module';
import { BadalComponent } from './badal/badal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ServicetestService} from './servicetest.service';
import { ApilearningComponent } from './apilearning/apilearning.component'
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    FloridaComponent,
    KentuckyComponent,
    BadalComponent,
    NotfoundComponent,
    DashboardComponent,
    ApilearningComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   

  ],
  providers: [ServicetestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
