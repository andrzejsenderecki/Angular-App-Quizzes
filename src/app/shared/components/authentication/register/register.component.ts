import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/account/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authenticationService.user) {
      this.router.navigate(['/dashboard/list']);
    }
  }

  register(formData: NgForm) {
    this.authenticationService.register(formData.value.email, formData.value.password);
  }
}
