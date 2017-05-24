
export class Constants {
    api_url: String;
    ui_url: String;
    org_api_url:string;
    constructor() {
        this.api_url = "http://192.168.1.139:9090/api/v1/";
        this.ui_url = "http://security.kisai.local/";
        this.org_api_url = "http://192.168.1.139:9080/api/v1/";
    }
}

