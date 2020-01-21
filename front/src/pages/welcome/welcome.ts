import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
     
     this.navCtrl.setRoot(LoginPage);
           
    }, 3500)
  }
 

}
