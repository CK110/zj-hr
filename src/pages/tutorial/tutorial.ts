import { Component } from '@angular/core';
import {NavController, MenuController, Slides} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {

  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage
  ) { }

  startApp() {
    this.storage.get('hasLoggedIn').then(hasLoggedIn=>{
      let nextPage:any;
      if(hasLoggedIn){
        nextPage = TabsPage
      }else{
        nextPage = LoginPage
      }
      this.navCtrl.push(nextPage).then(() => {
        this.storage.set('hasSeenTutorial', 'true');
      })
    })
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }


}
