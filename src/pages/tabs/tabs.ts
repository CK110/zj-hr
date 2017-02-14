import { Component } from '@angular/core';

import { TodoPage } from '../todo/todo';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodoPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(public navCtrl:NavController) {

  }

  todo(){
    this.navCtrl.push(TodoPage);
  }
}
