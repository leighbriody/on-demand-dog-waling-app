import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpOwnerPage } from './sign-up-owner.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpOwnerPageRoutingModule {}
