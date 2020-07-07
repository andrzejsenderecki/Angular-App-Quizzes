import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { QuizzesListComponent } from 'src/app/shared/components/quizzes/quizzes-list/quizzes-list.component';
import { QuizDetailsComponent } from 'src/app/shared/components/quizzes/quiz-details/quiz-details.component';
import { QuizResultComponent } from 'src/app/shared/components/quizzes/quiz-result/quiz-result.component';
import { QuizCreateFormComponent } from 'src/app/shared/components/quizzes/quiz-create-form/quiz-create-form.component';
import { QuizzesListCategoryComponent } from 'src/app/shared/components/quizzes/quizzes-list-category/quizzes-list-category.component';

const quizzesRoutes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent,
    children: [
      {
        path: 'list',
        component: QuizzesListComponent
      },
      {
        path: 'list/category',
        component: QuizzesListCategoryComponent
      },
      {
        path: 'quiz/:id',
        component: QuizDetailsComponent
      },
      {
        path: 'quiz/result/:id',
        component: QuizResultComponent
      },
      {
        path: 'create',
        component: QuizCreateFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(quizzesRoutes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule {}
