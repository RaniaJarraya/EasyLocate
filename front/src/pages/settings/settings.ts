import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  fname = '';
  lname = '';
  email = '';
  role = '';
  password = '';
  constructor(private toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams, private auth: ApiProvider,private alertCtrl:AlertController) {
    let info = this.auth.getUserInfo();
    if(info) {
      //this.auth.getImageProfil(info.email);  

      this.fname = info.fname ;
      this.lname = info.lname
      this.email = info.email;
      this.role = info.role;
      this.password = info.password;
  } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  changepw(){
    let alert=this.alertCtrl.create({
      title:'change password',
      inputs:[
        {
          name:'email',
          placeholder:'email of user',
          type:'email'
        },
        {
          name:'newpass',
          placeholder:'New password',
          type:'password'
        }
      ],
      buttons:[
        {
          text:'Cancel',
          role:'Cancel',
          handler:()=>{
            console.log('Canceled')
          }
        },
        {
          text:'Change',
          handler:data =>{
            console.log('Changed');
            this.auth.uppassword(data.newpass,data.email);
        }
      }
      ]
    });
    alert.present();
  }
  deleteuser(){
    if (this.role=="Admin"){
      let alert=this.alertCtrl.create({
        title:' Delete User',
        inputs:[
          {
            name:'email',
            placeholder:'email of user',
            type:'email'
          },{
            name:'Name',
            placeholder:'name of user',
            type:'string'
          }
        ],
        buttons:[
          {
            text:'Cancel',
            role:'Cancel',
            handler:()=>{
              let toast = this.toastCtrl.create({
                message: 'Delete cancelled',
                duration: 3000
              });
              toast.present();console.log('Canceled')
            }
          },
          {
            text:'Delete',
            handler:data =>{
              console.log('Deleted');
              this.auth.userdelete(data.email);
              let toast = this.toastCtrl.create({
                message: 'User deleted',
                duration: 3000
              });
              toast.present()
              
          }
        }
        
        ]
      });
      alert.present();
  
    }else {
      let alert = this.alertCtrl.create({
        title: 'access fail',
        subTitle: 'Sorry!! only Admin members can delete users.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
             // this.navCtrl.setRoot(TabsPage);
            }
          }
        ]
      });
      alert.present();

    }
  }
  

}
