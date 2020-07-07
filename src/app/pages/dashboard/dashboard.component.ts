import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/account/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
