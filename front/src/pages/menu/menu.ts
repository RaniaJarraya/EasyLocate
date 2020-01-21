import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, AlertController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ApiProvider } from '../../providers/api/api';
import { MenuPageModule } from './menu.module';
export interface PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = TabsPage;

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: TabsPage, tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'Search', pageName: TabsPage, tabComponent: 'SearchPage', index: 1, icon: 'time'},
    {title: 'Contact', pageName: TabsPage, tabComponent: 'ContactPage', index: 2, icon: 'contacts'},
    {title: 'About', pageName: AboutPage, icon: 'information-circle'},
    {title: 'Settings', pageName: SettingsPage, icon: 'settings'},
    {title: 'Register', pageName: RegisterPage, icon: 'person-add'},
  ];
  role = '';
  email='';
  constructor(public navCtrl: NavController , private auth: ApiProvider,public alertCtrl:AlertController) {
    let info = this.auth.getUserInfo();
    if(info) {
      this.role = info.role;
      this.email = info.email;
  }
  }
 

  openPage(page: PageInterface) {
    let params = {};
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = {tabIndex: page.index};
    }
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
        if (page.pageName==RegisterPage){
                if (this.role=="Admin"){
                  this.nav.setRoot(RegisterPage, params);
                }else{
                  let alert = this.alertCtrl.create({
                    title: 'access fail',
                    subTitle: 'Sorry!! only Admin members can add users.',
                    buttons: [
                      {
                        text: 'OK',
                        handler: () => {
                          this.nav.setRoot(TabsPage, params);
                        }
                      }
                    ]
                  });
                  alert.present();
            
                }
       }else{
         this.nav.setRoot(page.pageName, params);
       }
  };
}

  setActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root.name === page.tabComponent) {
        return 'dark';
      }
      return;
    }
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName.name) {
      return 'dark';
    }
    return;
  }
 logout(){
   this.auth.logout();
   this.auth.getImageProfil(this.email)
  this.navCtrl.setRoot(LoginPage);
 }

}