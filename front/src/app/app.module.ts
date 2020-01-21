import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
//import {File} from '@ionic-native/file' 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ApiProvider } from '../providers/api/api';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import {RegisterPage}from '../pages/register/register';
import {HistoryPage} from '../pages/history/history'
import { HttpModule } from '@angular/http';
import { SearchPage } from '../pages/search/search';
import { WelcomePage } from '../pages/welcome/welcome';

import { LoginPage} from '../pages/login/login';
import { MenuPageModule } from '../pages/menu/menu.module';
import { SettingsPage } from '../pages/settings/settings';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    RegisterPage,
    SearchPage,
    HistoryPage,
    SettingsPage,
    WelcomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MenuPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WelcomePage,
    SearchPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagePicker,
    Base64,
    ApiProvider
  ]
})
export class AppModule {}
