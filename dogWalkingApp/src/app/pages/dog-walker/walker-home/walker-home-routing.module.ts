import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkerHomePage } from './walker-home.page';

const routes: Routes = [
  {
    path: '',
    component: WalkerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkerHomePageRoutingModule {}
