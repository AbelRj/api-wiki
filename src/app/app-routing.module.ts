import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkLoginGuard } from './auth/guards/check-login.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [checkLoginGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
