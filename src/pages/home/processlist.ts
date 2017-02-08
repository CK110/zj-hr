import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
// import {AddContractPage} from "../hr/personnel/contract/add/addcontract";
import {SelectUserPage} from "../common/selectuser";
@Component({
    templateUrl: 'processlist.html'
})
export class ProcessListPage implements OnInit {
    constructor(public modalCtrl: ModalController) { }

    ngOnInit() { }



    toAddPage(name){
      // if(name =='contract'){
      //     let modal = this.modalCtrl.create(AddContractPage,{ userId: 123456 });
        let modal = this.modalCtrl.create(SelectUserPage,{ userId: 123456 }); // adduserid

        modal.present();
      // }
    }

}
