import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginWalkerPage } from './login-walker.page';

const routes: Routes = [
  {
    path: '',
    component: LoginWalkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginWalkerPageRoutingModule {}
