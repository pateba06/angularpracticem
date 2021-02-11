import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FloridaComponent } from './florida/florida.component';
import { KentuckyComponent } from './kentucky/kentucky.component';
import { BadalComponent } from './badal/badal.component';

const routes: Routes = [
  {
    path:"florida",
    component:FloridaComponent
  },
  {
    path:"kentucky",
    component:KentuckyComponent
  },
  {
    path:"badal",
    component:BadalComponent
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
