import { Component , ViewChild, ElementRef,} from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HistoryPage } from '../history/history';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  toggled:any;
  role = "";
  email="";
  fname="";
  lname="";

 // @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean = false;
  queryText: string;
  show =[] ;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:ApiProvider ) {
 

  }
  
  test(){
    this.show[0] = this.auth.searchedUser[0] ;
    this.show[1]= this.auth.searchedUser[1] ;
    this.show[2]= this.auth.searchedUser[2] ;
    this.show[3]= this.auth.searchedUser[3];
  }

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
      this.searchbarElement.setFocus();
    }
  }

  searchAction(texto: any) {
    let val = texto.target.value;
    this.show = this.auth.searchedUser
    console.log(val);
   this.auth.search(val);
  // let info=this.auth.getsearchInfo();
  }

  histrique(){
    this.navCtrl.push(HistoryPage);
  }

}





