import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Md5 } from 'ts-md5/dist/md5';
import { OrganizationLoginComponent } from "../login/org_login.component";
import { Users } from '../../models/users';
import { SecurityService } from "./security.service";
import { ShareModule } from './../../modules/common/share.module';

@Component({
    selector: 'security',
    templateUrl: './security.html',
    providers: [OrganizationLoginComponent]
})

export class SecurityComponent implements OnInit, OnDestroy {
    SecurityForm: FormGroup;
    ForgotForm: FormGroup;

    users: Users[];
    public response = '';
    showError: boolean = false;
    res: boolean = false;

    public organization_name: string = "surya";
    SHOW_LOGIN: boolean;
    SHOW_FORGOT: boolean;
    result: any;

    user_mobile_auth: any;
    mobileAuth: boolean;
    remember_me: boolean;

    /*QRCode variables*/
    public interval;
    public value;
    public size;
    public level;
    public mime;
    public padding;
    public canvas;

    public message = '';

    constructor(private fb: FormBuilder, private router: Router, private securityService: SecurityService,
        private orgLoginComponent: OrganizationLoginComponent, private _md5: Md5) {
        this.SecurityForm = fb.group({
            'userName': [null, Validators.compose([Validators.required, Validators.pattern("([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)")])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            'remember_me': [false]
        });

        this.SecurityForm.valueChanges.subscribe(data => {
            if(data.userName=='') {
                this.mobileAuth = false;
            }
        })

        this.ForgotForm = this.fb.group({
            'userName': [null, Validators.compose([Validators.required, Validators.pattern("([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)")])]
        });
    }

    ngOnInit() {
        this.organization_name = this.orgLoginComponent.organizationName || 'surya';
        this.remember_me = false;
        this.getBarcode();
        this.checkValidSession();
        this.SHOW_LOGIN = true;
        this.SHOW_FORGOT = false;
    }

    ngOnDestroy() { }

    getBarcode() {
        this.level = 'Q';
        this.securityService.getBarcode()
            .then(
            data => {
                console.log(data);
                if (data.status == true) {
                    this.value = data.message;
                }
                else {
                    this.message = "Somethigng Went Wrong";
                }
            },
            error => { console.log(error) }
            );
        Observable.timer(10000).first().subscribe(() => this.getBarcode());
    }

    onSubmit(value: any) {
        this.response = "";
        let md5_password = Md5.hashStr(value.password);
        let res = this.securityService.loginAuth(value.userName, md5_password, value.remember_me)
            .then(
            data => {
                console.log(data);
                if (data.status == true) {
                    window.location.href = 'http://teams.kisai.local';
                } else {
                    this.response = data.message;
                    setTimeout(() => {
                        this.response = '';
                        this.res = false;
                    }, 2000);
                }
            },
            error => { console.log(error) }
            );
    }

    forgotPwd() {
        this.SHOW_LOGIN = false;
        this.SHOW_FORGOT = true;
        this.ForgotForm.reset();
    }

    cancelForgotPwd() {
        this.SHOW_LOGIN = true;
        this.SHOW_FORGOT = false;
    }

    onForgotSubmit(value: any) {
        this.securityService.forgotPassword(this.ForgotForm.value['userName'])
            .then(
            data => {
                if (data.status == true) {
                    this.response = data.data;
                    setTimeout(function () {
                        this.response = '';
                        this.SHOW_LOGIN = true;
                        this.SHOW_FORGOT = false;
                    }.bind(this), 3000);
                } else {
                    this.response = data.message;
                    setTimeout(() => {
                        this.response = "";
                    }, 2000);
                }

            },
            error => {
                console.log(error)
            }
            );
    }

    checkMobileAuth() {
        this.securityService.checkMobileAuth(this.user_mobile_auth)
            .then(
            data => {
                if (data.status == true) {
                    this.mobileAuth = true;
                } else {
                    this.mobileAuth = false;
                }
            },
            error => {
                console.log(error)
            }
            );
    }

    checkValidSession() {
        let flag: any;
        if (this.remember_me == true) {
            flag = 'y';
        } else {
            flag = 'n';
        }
        this.securityService.checkStatus(flag)
            .then(
            data => {
                if (data.status == true) {
                    //console.log("Y");
                } else {
                    //console.log("N");
                }
            },
            error => {
                console.log(error)
            }
            );
        Observable.timer(10000).first().subscribe(() => this.checkValidSession());
    }

    mobileAuthentication() {
        this.securityService.mobilePush(this.user_mobile_auth, this.remember_me)
            .then(
            data => {
                if (data.status == true) {
                    //console.log("Y");
                } else {
                    //console.log("N");
                }
            },
            error => {
                console.log(error)
            }
            );
    }
}