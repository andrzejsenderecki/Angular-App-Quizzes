import { NgModule } from '@angular/core';
import { QuizzesComponent } from './quizzes.component';
import { CommonModule } from '@angular/common';
import { QuizzesRoutingModule } from './quizzes.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    QuizzesComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule {}
