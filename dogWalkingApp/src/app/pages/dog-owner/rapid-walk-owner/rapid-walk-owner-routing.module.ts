import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapidWalkOwnerPage } from './rapid-walk-owner.page';

const routes: Routes = [
  {
    path: '',
    component: RapidWalkOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapidWalkOwnerPageRoutingModule {}
