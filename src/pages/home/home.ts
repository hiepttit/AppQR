import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/';
import { DetailPage } from '../detail/detail';
import { ProductProvider } from '../../providers/data';
import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  check: boolean;
  options: BarcodeScannerOptions;
  encodeText: string = '';
  qrText: string = '';
  encodedData: any = {};
  scannedData: any = {};
  constructor(public navCtrl: NavController, public scanner: BarcodeScanner,public loadingCtrl: LoadingController, public dataService: ProductProvider, public alert: AlertController, public network:Network,public dialog:Dialogs) {
    this.network.onDisconnect().subscribe(()=>
      {
        this.check=false;
        // this.dialog.alert('Kết nối mạng để sử dụng ứng dụng')
      });
      this.network.onConnect().subscribe(()=>
      {
        this.check=true;
        // this.dialog.alert('Kết nối mạng để sử dụng ứng dụng')
      });
  }
  scan() {
    if(this.check==false)
    {
      this.dialog.alert('Kết nối mạng để sử dụng ứng dụng')
    }
    if(this.check==true)
    {
      this.options = {
        prompt: ''
      };
      this.scanner.scan(this.options).then((data) => {
        if(data.text==null || data.text=="")
        {
          return;
        }
        this.scannedData = data; 
        this.qrText=data.text;    
        let loading = this.loadingCtrl.create({
          content: 'Loading Please Wait...'
        });     
        loading.present();
      
        setTimeout(() => {
          this.goToDetail(this.qrText);
        }, 2000);
      
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
       
      }, (err) => {
        console.log('Error : ', err);
      });
    }
  }
  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error : ', err);
    });
  }
  goToDetail(item) {
    if (!item) item = {};
    // let data = await this.dataService.getList(item);
    this.navCtrl.push(DetailPage, { data: item });
  }
  // goToDetail(item) {
  //   let prompt = this.alert.create({ // <--
  //     title: 'Message',
  //     message: 'Thêm thành công: ' + item,
  //     buttons: [
  //       {
  //         text: 'OK'
  //       },
  //     ]
  //   });
  //   //prompt.present();
  //   console.log(item)
  //   if (!item) item = {};
  //   this.navCtrl.push(DetailPage, { data: item });
  // }
}
