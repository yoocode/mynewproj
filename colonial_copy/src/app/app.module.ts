import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';
import { ChildrenPage } from '../pages/children/children';
import { MapPage } from '../pages/map/map';
import { Service } from '../providers/service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminPage,
    ChildrenPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminPage,
    ChildrenPage,
    MapPage
  ],
  providers: [
    Service,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
