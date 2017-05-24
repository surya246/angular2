import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';

import { SecurityComponent } from "./security.component";
import { SecurityRoutingModule } from './security.routing';
import { SecurityService } from "./security.service";
import { CommonModule } from '@angular/common';
import { ShareModule } from './../../modules/common/share.module';
import { QRCodeModule } from 'angular2-qrcode';
import { Md5 } from 'ts-md5/dist/md5';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@NgModule({
    imports: [
        SecurityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        ShareModule,
        QRCodeModule,
        HttpModule      
    ],
    declarations: [
        SecurityComponent
    ],
    providers: [
        SecurityService,
        Md5
    ]
})

export class SecurityModule {

}
