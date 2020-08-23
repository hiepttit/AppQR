
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as TheHeaders } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseServiceProvider {
    protected host: string = "http://40.113.225.128:9984/api/v1/assets";
    result: any;
    constructor(public http: Http) {
        //this.getData();
    }
    protected async getData(link: string, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = await this.http.get(link, opstion);
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
    protected async postData(link: string, para, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = await this.http.post(link, para, opstion);
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
    protected async putData(link: string, para, opstion) {
        return new Promise<any[]>(async (resolve, reject) => {
            let data = await this.http.put(link, para, opstion);
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