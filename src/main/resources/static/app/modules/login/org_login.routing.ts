import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrganizationLoginComponent } from "./org_login.component";

const routes: Routes = [
    { path: '', component: OrganizationLoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OrganizationRoutingModule { }