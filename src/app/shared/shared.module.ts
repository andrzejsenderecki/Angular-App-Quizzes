import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizzesListComponent } from './components/quizzes/quizzes-list/quizzes-list.component';
import { QuizDetailsComponent } from './components/quizzes/quiz-details/quiz-details.component';
import { RouterModule } from '@angular/router';
import { QuestionFormComponent } from './components/quizzes/question-form/question-form.component';
import { QuizResultComponent } from './components/quizzes/quiz-result/quiz-result.component';
import { QuizTimerComponent } from './components/quizzes/quiz-timer/quiz-timer.component';
import { QuizCreateFormComponent } from './components/quizzes/quiz-create-form/quiz-create-form.component';
import { QuizzesListCategoryComponent } from './components/quizzes/quizzes-list-category/quizzes-list-category.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { UserQuizzesListComponent } from './components/authentication/user-quizzes-list/user-quizzes-list.component';
import { UserQuizEditFormComponent } from './components/authentication/user-quiz-edit-form/user-quiz-edit-form.component';
import { MainNavComponent } from './components/common/main-nav/main-nav.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { AsideNavComponent } from './components/common/aside-nav/aside-nav.component';
import { MainTitleComponent } from './components/common/main-title/main-title.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MobileNavComponent } from './components/common/mobile-nav/mobile-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InnerNavComponent } from './components/common/inner-nav/inner-nav.component';
import { InnerHeaderComponent } from './components/common/inner-header/inner-header.component';
import { UserQuizStatsComponent } from './components/authentication/user-quiz-stats/user-quiz-stats.component';

@NgModule({
  declarations: [
    QuizzesListComponent,
    QuizDetailsComponent,
    QuestionFormComponent,
    QuizResultComponent,
    QuizTimerComponent,
    QuizCreateFormComponent,
    QuizzesListCategoryComponent,
    LoginComponent,
    RegisterComponent,
    UserQuizzesListComponent,
    UserQuizEditFormComponent,
    MainNavComponent,
    LogoComponent,
    AsideNavComponent,
    MainTitleComponent,
    FooterComponent,
    MobileNavComponent,
    InnerNavComponent,
    InnerHeaderComponent,
    UserQuizStatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    MobileNavComponent,
    MainNavComponent,
    LogoComponent,
    AsideNavComponent,
    MainTitleComponent,
    FooterComponent,
    InnerNavComponent,
    InnerHeaderComponent,
    UserQuizStatsComponent
  ]
})
export class SharedModule {}
