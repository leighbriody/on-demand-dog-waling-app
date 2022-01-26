import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/logged-out-home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'logged-out-home',
    loadChildren: () => import('./pages/auth/logged-out-home/logged-out-home.module').then( m => m.LoggedOutHomePageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./pages/auth/login-owner/login-owner.module').then( m => m.LoginOwnerPageModule)
  },
 

  {
    path: 'logged-out-home',
    loadChildren: () => import('./pages/auth/logged-out-home/logged-out-home.module').then( m => m.LoggedOutHomePageModule)
  },
  {
    path: 'logged-out-home',
    loadChildren: () => import('./pages/auth/logged-out-home/logged-out-home.module').then( m => m.LoggedOutHomePageModule)
  },
  {
    path: 'sign-up-owner',
    loadChildren: () => import('./pages/auth/sign-up-owner/sign-up-owner.module').then( m => m.SignUpOwnerPageModule)
  },
  {
    path: 'sign-up-walker',
    loadChildren: () => import('./pages/auth/sign-up-walker/sign-up-walker.module').then( m => m.SignUpWalkerPageModule)
  },
  {
    path: 'login-walker',
    loadChildren: () => import('./pages/auth/login-walker/login-walker.module').then( m => m.LoginWalkerPageModule)
  },
  {
    path: 'login-owner',
    loadChildren: () => import('./pages/auth/login-owner/login-owner.module').then( m => m.LoginOwnerPageModule)
  },
 

  {
    path: 'choose-sign-in',
    loadChildren: () => import('./pages/auth/choose-sign-in/choose-sign-in.module').then( m => m.ChooseSignInPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
