import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Users } from '../../models/users';
import { UserData } from '../../models/mock-users';
import { Constants } from '../common/constants';

@Injectable()
export class SecurityService {
    constructor(private http: Http, private constants: Constants) { }

    /*Local Mock Data*/
    getUsers(): Users[] {
        return UserData;
    }

    getBarcode() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.constants.api_url + "login/barcode", options)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }

    loginAuth(username: string, password: any, remember_me: boolean) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });

        let body = "username=" + username + "&password=" + password + "&rememberme=" + remember_me;
        return this.http.post(this.constants.api_url + "login", body, options)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }

    forgotPassword(email: any) {
        return this.http.get(this.constants.api_url + "login/forgotpassword?email=" + email)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }

    checkMobileAuth(username: any) {
        return this.http.get(this.constants.api_url + "login/checkmobile/" + username)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }

    checkStatus(remember_me) {
        return this.http.get(this.constants.api_url + "login/checkstatus?" + remember_me)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }

    mobilePush(username, remember_me) {
        return this.http.get(this.constants.api_url + "login/mobilepush?email=" + username + "&rememberme=" + remember_me)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }
}
