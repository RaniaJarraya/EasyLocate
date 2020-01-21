import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ApiProvider } from '../../providers/api/api';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' }

  constructor(public nav: NavController, public navParams: NavParams,private auth: ApiProvider,
     private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
       
  }

createAccount() {
    this.nav.setRoot(RegisterPage, {}, { animate: true, direction: 'forward' });
  }
 
login() {
  this.auth.getImageProfil(this.registerCredentials.email);
    this.showLoading()
   
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed && allowed.success) {        
        this.nav.setRoot(MenuPage, {}, { animate: true, direction: 'forward' });
      } else {
        this.showError("Access Denied");
      }
    });
    
  }
 
showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
