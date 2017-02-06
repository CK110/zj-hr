import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  value:string;
  items:any;

  constructor(public navCtrl: NavController,storage: Storage) {
    // set a key/value
    storage.set('name', 'Max');

    // Or to get a key/value pair
    storage.get('name').then((val) => {
      console.log('Your name is', val);
      console.log(storage);
      this.value= val;

    })
  }

  ngOnInit(){
    this.items=[1,2,3,4,5,6,7,8,9,0,8,9,7,7,6,5,4,5,6,7,8,6,5,4,3,4,5,7]
  }

}
