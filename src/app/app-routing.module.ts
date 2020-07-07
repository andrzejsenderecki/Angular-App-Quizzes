import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { QuizzesModule } from './pages/quizzes/quizzes.module';
import { AccountModule } from './pages/account/account.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

const routes: Routes = [];

@NgModule({
  imports: [HomeModule, QuizzesModule, AccountModule, DashboardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
