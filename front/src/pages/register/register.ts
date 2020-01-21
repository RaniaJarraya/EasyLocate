import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { ApiProvider } from '../../providers/api/api';
import { TabsPage } from '../tabs/tabs';
//import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  regData = {fname: '', lname: '', email: '', password: '', role: '', avatar:'' };
  imgPreview = 'assets/imgs/blank-avatar.jpg';
  loading:any;

  constructor(public navCtrl: NavController,
    private imagePicker: ImagePicker,
    private base64: Base64,
    public api: ApiProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {}

  getPhoto() {
    let options = {
      maximumImagesCount: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.imgPreview = results[i];
          this.base64.encodeFile(results[i]).then((base64File: string) => {
            this.regData.avatar = base64File;
          }, (err) => {
            console.log(err);
          });
      }
    }, (err) => { });
  }

  register() {
    this.showLoader();
    this.api.register(this.regData).subscribe((result) => {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Registration Successful',
        subTitle: 'Great! Your registration is success',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.push(TabsPage);
            }
          }
        ]
      });
      alert.present();

    }, (err) => {
      console.log(err);
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Registration Failed',
        subTitle: 'Oh no! Your registration is failed',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Submitting...'
    });

    this.loading.present();
  }

}
