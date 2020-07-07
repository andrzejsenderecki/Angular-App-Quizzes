import { Component, OnInit } from '@angular/core';
import { NavSublistService } from '../../../../core/services/nav-sublist/nav-sublist.service';
import { faHome, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  faHome = faHome;
  faStickyNote = faStickyNote;
  faUser = faUser;
  sublistIndex: number;

  constructor(private navSublistService: NavSublistService) { }

  ngOnInit() {
    this.navSublistService.getSublistIndex().subscribe(value => {
      this.sublistIndex = value;
    });
  }

  changeSublistIndex(index: number): void {
    this.navSublistService.setSublistIndex(index);
  }
}
