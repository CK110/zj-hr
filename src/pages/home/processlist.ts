import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {SelectUserPage} from "../common/selectuser";
@Component({
    templateUrl: 'processlist.html'
})
export class ProcessListPage implements OnInit {
    constructor(public modalCtrl: ModalController, public navCtrl: NavController) { }

    ngOnInit() { }



    toAddPage(name){


      let modal = this.modalCtrl.create(SelectUserPage,{ userId: 123456 }); // adduserid
      modal.present();

      // if(name =='contract'){
        //let modal = this.modalCtrl.create(SelectUserPage,{ userId: 123456 }); // adduserid
        // let modal = this.modalCtrl.create(NavigationModal,{ userId: 123456 }); // adduserid
        // modal.present();
      // }
    }

}
