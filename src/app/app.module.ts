import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BaseServiceProvider } from '../providers/Base';
import { ProductProvider } from '../providers/data';
import { DetailPage } from '../pages/detail/detail';
import { HttpModule } from '@angular/http'; 
import { InforPage } from '../pages/Infor/infor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    InforPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    InforPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    ProductProvider,
    BaseServiceProvider,
    Network,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
