import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { Constants } from '../common/constants';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        Constants
    ],
    exports:[ HeaderComponent, FooterComponent ]
})

export class ShareModule { }
