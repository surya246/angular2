import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/organization_login.module#OrganizationLoginModule' },
  { path: 'security', loadChildren: './modules/security/security.module#SecurityModule' },
  { path: 'signup', loadChildren: './modules/signup/signup.module#SignUpModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
