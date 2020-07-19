
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as TheHeaders } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseServiceProvider {
    protected host: string = "https://test.ipdb.io/api/v1/assets";
    result: any;
    constructor(public http: Http) {
        //this.getData();
    }
    protected getData(link: string, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = this.http.get(link, opstion);
            data.map(res => res.json()).subscribe(
                response => {
                    resolve(response);
                },
                error => {
                    console.log(error.message);
                    reject(error);
                });
        });
    }
    protected postData(link: string, para, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = this.http.post(link, para, opstion);
            data.map(res => res.json()).subscribe(
                response => {
                    resolve(response);
                },
                error => {
                    console.log(error.message);
                    reject(error);
                });
        });
    }
    protected putData(link: string, para, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = this.http.put(link, para, opstion);
            data.map(res => res.json()).subscribe(
                response => {
                    resolve(response);
                },
                error => {
                    console.log(error.message);
                    reject(error);
                });
        });
    }
}