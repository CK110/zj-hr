import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { TutorialPage } from "../pages/tutorial/tutorial";
import {UserData} from "../providers/userdata";
import {LoginPage} from "../pages/login/login";

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(public platform: Platform,public storage: Storage,public userData: UserData){


    // 判断用户是否已经看过Tutorial和登录
    this.storage.get('hasSeenTutorial').then((hasSeenTutorial)=>{
      if (hasSeenTutorial) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = LoginPage;
      }
      this.platformReady();
    })
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openTutorial(){
    this.nav.setRoot(TutorialPage);
  }
}
