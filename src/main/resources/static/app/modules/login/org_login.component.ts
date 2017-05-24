import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Team } from '../../models/team';
import { OrganizationService } from "./organization.service";
import { RouterModule, Router } from '@angular/router';
import { ShareModule } from './../../modules/common/share.module';


@Component({
    selector: 'login',
    templateUrl: './organization.html'
})

export class OrganizationLoginComponent implements OnInit {
    teams: Team[];
    public response = '';
    showError: boolean = false;
    public organizationName:string = '';
    constructor(private organizationService: OrganizationService, private router: Router) {
    }

    OrgLoginForm = new FormGroup({
        orgName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)]))
    });

    ngOnInit() { }

    onSubmit(value: any) {
        this.organizationService.authOrganization(this.OrgLoginForm.value['orgName'])
            .then(data => {
                console.log(data);
                console.log(data.status);
                if (data.status == true) {
                    this.organizationName = value.orgName || '';
                    //localStorage.setItem("organization", value.orgName);
                    this.router.navigate(['/security']);
                } else {
                    this.response = data.message;
                    setTimeout(() => {
                        this.response = "";
                    }, 2000);
                }
            },
            error => { console.log(error) }
            );
    }
}