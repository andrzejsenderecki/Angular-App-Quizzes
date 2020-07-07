import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { QuizCreateUpdateService } from 'src/app/core/services/quizzes/quiz-create-update.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz-create-form',
  templateUrl: './quiz-create-form.component.html',
  styleUrls: ['./quiz-create-form.component.scss'],
  providers: [QuizCreateUpdateService]
})
export class QuizCreateFormComponent implements OnInit {

  faCheck = faCheck;

  constructor(private quizCreateUpdateService: QuizCreateUpdateService) { }

  ngOnInit() { }

  get quizCreateForm() {
    return this.quizCreateUpdateService.quizCreateForm;
  }

  get questionsArray() {
    return this.quizCreateUpdateService.questionsArray;
  }

  get answersArray() {
    return this.quizCreateUpdateService.answersArray;
  }

  get title() {
    return this.quizCreateUpdateService.title;
  }

  get quizOnTime() {
    return this.quizCreateUpdateService.quizOnTime;
  }

  get numberAnswersNeededToPass() {
    return this.quizCreateUpdateService.numberAnswersNeededToPass;
  }

  get quizWithResult() {
    return this.quizCreateUpdateService.quizWithResult;
  }

  get timeInSeconds() {
    return this.quizCreateUpdateService.timeInSeconds;
  }

  setCorrectAnswer(value: number, questionNumber: number): void {
    return this.quizCreateUpdateService.setCorrectAnswer(value, questionNumber);
  }

  addQuesion(): void {
    (this.quizCreateUpdateService.questionsArray as FormArray).push(this.quizCreateUpdateService.addQuestionGroup());
  }

  removeQuestion(index: number): void {
    const currentAmountAnswers = this.quizCreateUpdateService.amountAnswers;
    this.quizCreateUpdateService.amountAnswers = currentAmountAnswers - 1;
    this.quizCreateUpdateService.questionsArray.removeAt(index);
  }

  addAnswer(formGroupNumber: number): void {
    this.quizCreateUpdateService.addAnswer(formGroupNumber);
  }

  removeAnswer(formGroupNumber: number, index: number): void {
    this.quizCreateUpdateService.removeAnswer(formGroupNumber, index);
  }

  onSubmit(): void {
    this.quizCreateUpdateService.onSubmitCreateQuiz();
  }
}
