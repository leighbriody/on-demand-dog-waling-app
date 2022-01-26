import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpWalkerPage } from './sign-up-walker.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpWalkerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpWalkerPageRoutingModule {}
