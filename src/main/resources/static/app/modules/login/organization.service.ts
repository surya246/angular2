import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../common/constants';

import { Team } from '../../models/team';
import { Teams } from '../../models/mock-teams';


@Injectable()
export class OrganizationService {
    constructor(private http: Http, private constants: Constants) { }

    getTeams(): Team[] {
        return Teams;
    }

    authOrganization(org_name: string) {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.constants.org_api_url + "organization/exists/" + org_name, options)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }
}