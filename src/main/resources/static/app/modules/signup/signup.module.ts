import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './signup.component';
import { SignUpRoutingModule } from './signup.routing';
import { SignUpService } from "./signup.service";
import { CommonModule } from '@angular/common';
import { ShareModule } from './../../modules/common/share.module';
import { CalendarModule } from "ap-angular2-fullcalendar";
//import { CalendarComponent } from "ap-angular2-fullcalendar";

@NgModule({
    imports: [
        SignUpRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        ShareModule,
        CalendarModule
    ],
    exports: [],
    declarations: [SignUpComponent],
    providers: [],
})

export class SignUpModule { }
