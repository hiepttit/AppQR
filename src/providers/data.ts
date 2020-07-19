
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as TheHeaders } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseServiceProvider } from './Base';
import { DateTime } from 'ionic-angular';

@Injectable()
export class ProductProvider extends BaseServiceProvider {
    public getList(productID) {
        return this.getData(this.host + "/?search="+productID, {});
    }
}