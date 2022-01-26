import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseSignInPage } from './choose-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseSignInPageRoutingModule {}
