import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class NavbarComponent {

  constructor(private userService:UserService, private loginService:LoginService, private router:Router) { }

  logout() {
    //this.loginService.logout();
    this.userService.isLogin = false;
    this.userService.userInfo = null;
    this.router.navigate(['']);
  }
}
