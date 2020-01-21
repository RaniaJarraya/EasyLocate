import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ContactPage;
  myIndex: number;

  constructor(public navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
