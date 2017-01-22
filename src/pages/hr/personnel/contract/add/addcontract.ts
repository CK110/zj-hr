import { Component, OnInit } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
    templateUrl: './addcontract.html'
})
export class AddContractPage implements OnInit {

    constructor(params: NavParams,public viewCtrl: ViewController) {

      console.log('UserId', params.get('userId'));
    }

    ngOnInit() { }


    submit(){

    }

    cancel(){
      this.viewCtrl.dismiss();
    }

}
