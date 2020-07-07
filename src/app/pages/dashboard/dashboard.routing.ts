import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthenticationRoutingPathService } from '../../core/services/account/authenticationRoutingPath/authentication-routing-path.service';
import { QuizCreateFormComponent } from 'src/app/shared/components/quizzes/quiz-create-form/quiz-create-form.component';
import { UserQuizzesListComponent } from 'src/app/shared/components/authentication/user-quizzes-list/user-quizzes-list.component';
import { UserQuizEditFormComponent } from 'src/app/shared/components/authentication/user-quiz-edit-form/user-quiz-edit-form.component';
import { QuizDetailsComponent } from 'src/app/shared/components/quizzes/quiz-details/quiz-details.component';
import { UserQuizStatsComponent } from 'src/app/shared/components/authentication/user-quiz-stats/user-quiz-stats.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationRoutingPathService],
    children: [
      {
        path: 'create',
        component: QuizCreateFormComponent,
        canActivate: [AuthenticationRoutingPathService]
      },
      {
        path: 'quiz/:id',
        component: QuizDetailsComponent,
        canActivate: [AuthenticationRoutingPathService]
      },
      {
        path: 'quiz/stats/:id',
        component: UserQuizStatsComponent,
        canActivate: [AuthenticationRoutingPathService]
      },
      {
        path: 'list',
        component: UserQuizzesListComponent,
        canActivate: [AuthenticationRoutingPathService]
      },
      {
        path: 'edit/:id',
        component: UserQuizEditFormComponent,
        canActivate: [AuthenticationRoutingPathService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
