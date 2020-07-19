import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, List } from 'ionic-angular';
import { ProductProvider } from '../../providers/data';


@Component({
  selector: 'page-infor',
  templateUrl: 'infor.html'
})
export class InforPage {
  private infor;
  lstProduct: any = null;
  lstInfor: any={};
  lst: any = null;
  name: string = "";
  constructor(public navCtrl: NavController, navParams: NavParams, public productProvider: ProductProvider, public alert: AlertController) {
    this.infor = navParams.get('infor');
    this.Infor(); 
  }
  async Infor() {
    this.lstProduct = await this.productProvider.getList(this.infor);
    console.log(this.lstProduct)
  }
}
