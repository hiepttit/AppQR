import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/data';
import { InforPage } from '../Infor/infor';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private data;
  lstProduct: any = null;
  lstInfor: any = null;
  name: string = "";
  img: string = "";
  check: any = null;
  constructor(public navCtrl: NavController, navParams: NavParams, public loadingCtrl: LoadingController,public productProvider: ProductProvider, public alert: AlertController) {
    this.data = navParams.get('data');
    this.getListProduct();
    console.log(this.detail());
  }
  private async getListProduct() {
    this.lstProduct = await this.productProvider.getList(this.data);
    if(this.lstProduct==null || this.lstProduct=="")
    {
      this.presentAlert()
      this.navCtrl.pop();
    }
    this.name = this.lstProduct[0].data.nameProduct;
    this.img = this.lstProduct[0].data.imgPath;
  }
  presentAlert() {
    let alert = this.alert.create({
      title: 'Thông báo',
      subTitle: 'Không có sản phẩm này! Vui lòng quét mã khác',
      buttons: ['OK']
    });
    alert.present();
  } 
  async detail() {
    this.lstProduct = await this.productProvider.getList(this.data);
    for (let i = 0; i < this.lstProduct.length; i++) {
      let kt = this.lstProduct[i].data.hasOwnProperty("isPlanting");
      if (kt) {
        this.check=true;
      }
    }
  }
  async goToInfo() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(InforPage, { infor: this.data });
    }, 2000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);    
  }
}
