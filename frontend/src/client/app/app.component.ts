import { Component, OnInit } from '@angular/core';

import { Config } from './shared/index';
import {UserService} from "./core/services/user.service";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
    console.log('Environment config', Config);
  }

  ngOnInit():void {
    this.userService.getUser().subscribe(); // 获取用户信息
  }
}
