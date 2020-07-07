import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from '../../shared/components/authentication/login/login.component';
import { RegisterComponent } from '../../shared/components/authentication/register/register.component';

const acountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(acountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
