import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { EditModule } from './edit/edit.module';
import { CenterModule } from './center/center.module';
import { UserModule } from './user/user.module';
import { PublishedModule } from './published/published.module';

@NgModule({
  imports: [CoreModule, AdminModule, BrowserModule, HttpModule, AppRoutingModule, AboutModule,  HomeModule, UserModule,
  EditModule, CenterModule, PublishedModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
