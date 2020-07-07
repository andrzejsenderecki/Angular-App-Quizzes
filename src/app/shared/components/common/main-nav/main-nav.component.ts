import { Component, OnInit } from '@angular/core';
import { NavSublistService } from '../../../../core/services/nav-sublist/nav-sublist.service';
import { faHome, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  faHome = faHome;
  faStickyNote = faStickyNote;
  faUser = faUser;

  constructor(private navSublistService: NavSublistService) { }

  ngOnInit() {
  }

  changeSublistIndex(index: number): void {
    this.navSublistService.setSublistIndex(index);
  }

}
