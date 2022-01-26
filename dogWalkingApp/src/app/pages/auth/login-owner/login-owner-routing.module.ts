import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOwnerPage } from './login-owner.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOwnerPageRoutingModule {}
