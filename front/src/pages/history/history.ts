import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map'


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http)  {
  }
  histories:any;

  LoadHistory(email)
 {
   this.http.get('https//localhost:3000/email')
   .map(res => res.json())
   .subscribe (res => {
     var results=res.json();
     this.histories=results ;
   },(err) => {alert ("failed loading");}
   );
 }
    

}
