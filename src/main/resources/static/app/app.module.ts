import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { OrganizationLoginModule } from './modules/login/organization_login.module';
import { SecurityModule } from './modules/security/security.module';
import { SignUpModule } from './modules/signup/signup.module';
import { ShareModule } from './modules/common/share.module';
import { CalendarModule } from "ap-angular2-fullcalendar";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationLoginModule,
    SecurityModule,
    SignUpModule,
    ShareModule,
    CalendarModule
  ],
  declarations: [AppComponent],
  providers: [],
  exports: [ShareModule, CalendarModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
