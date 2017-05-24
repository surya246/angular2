import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router';

import { OrganizationLoginComponent } from "./org_login.component";
import { OrganizationRoutingModule } from './org_login.routing';
import { OrganizationService } from "./organization.service";
import { CommonModule } from '@angular/common';
import { ShareModule } from './../../modules/common/share.module';


@NgModule({
    imports: [
        OrganizationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        ShareModule
    ],
    declarations: [
        OrganizationLoginComponent
    ],
    providers: [
        OrganizationService
    ]
})

export class OrganizationLoginModule {

}
