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
  },
  {
    path: 'owner-home',
    loadChildren: () => import('./pages/dog-owner/owner-home/owner-home.module').then( m => m.OwnerHomePageModule)
  },
  {
    path: 'walker-home',
    loadChildren: () => import('./pages/dog-walker/walker-home/walker-home.module').then( m => m.WalkerHomePageModule)
  },
 
  {
    path: 'owner-pets',
    loadChildren: () => import('./pages/dog-owner/owner-pets/owner-pets.module').then( m => m.OwnerPetsPageModule)
  },
  {
    path: 'add-pet',
    loadChildren: () => import('./pages/dog-owner/add-pet/add-pet.module').then( m => m.AddPetPageModule)
  },
  {
    path: 'choose-walk-details',
    loadChildren: () => import('./pages/dog-owner/choose-walk-details/choose-walk-details.module').then( m => m.ChooseWalkDetailsPageModule)
  },
  {
    path: 'finding-walkers',
    loadChildren: () => import('./pages/dog-owner/finding-walkers/finding-walkers.module').then( m => m.FindingWalkersPageModule)
  },
  {
    path: 'finding-walkers/:id',
    loadChildren: () => import('./pages/dog-owner/finding-walkers/finding-walkers.module').then( m => m.FindingWalkersPageModule)
  },
 
  {
    path: 'find-walks',
    loadChildren: () => import('./pages/dog-walker/find-walks/find-walks.module').then( m => m.FindWalksPageModule)
  },
  {
    path: 'rapid-walk-owner',
    loadChildren: () => import('./pages/dog-owner/rapid-walk-owner/rapid-walk-owner.module').then( m => m.RapidWalkOwnerPageModule)
  },
  {
    path: 'rapid-walk-owner/:id',
    loadChildren: () => import('./pages/dog-owner/rapid-walk-owner/rapid-walk-owner.module').then( m => m.RapidWalkOwnerPageModule)
  },
  {
    path: 'rapid-walk-walker',
    loadChildren: () => import('./pages/dog-walker/rapid-walk-walker/rapid-walk-walker.module').then( m => m.RapidWalkWalkerPageModule)
  },
  {
    path: 'rapid-walk-walker/:id',
    loadChildren: () => import('./pages/dog-walker/rapid-walk-walker/rapid-walk-walker.module').then( m => m.RapidWalkWalkerPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
