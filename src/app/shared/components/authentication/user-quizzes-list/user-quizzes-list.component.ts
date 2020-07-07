import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../../core/services/firebase/firebase.service';
import { AuthenticationService } from '../../../../core/services/account/authentication/authentication.service';

@Component({
  selector: 'app-user-quizzes-list',
  templateUrl: './user-quizzes-list.component.html',
  styleUrls: ['./user-quizzes-list.component.scss']
})
export class UserQuizzesListComponent implements OnInit {

  private _quizzesList;

  constructor(
    private firebaseService: FirebaseService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    const loggedUser = this.authenticationService.user;

    this.firebaseService.getQuizzesByUserUid(loggedUser.uid).subscribe(quizzes => {
      this._quizzesList = quizzes;
    });
  }

  get quizzesList() {
    return this._quizzesList;
  }

  removeQuiz(quizId: string) {
    const loggedUser = this.authenticationService.user;
    this.firebaseService.removeUserQuizById(loggedUser.uid, quizId);
  }
}
