import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RapidWalkWalkerPage } from './rapid-walk-walker.page';

const routes: Routes = [
  {
    path: '',
    component: RapidWalkWalkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RapidWalkWalkerPageRoutingModule {}
