import { Component, OnInit } from '@angular/core';
import { faHome, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {

  hideNav = true;
  sublistIndex: number;
  faHome = faHome;
  faStickyNote = faStickyNote;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

  displayNav(): void {
    this.hideNav = !this.hideNav ? true : false;
  }

  displaySublist(index: number): void {
    this.sublistIndex = index;
  }

}
