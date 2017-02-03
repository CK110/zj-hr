import { Component, OnInit } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './addcontract.html'
})
export class AddContractPage implements OnInit {

    add:any={};

    constructor(params: NavParams,public viewCtrl: ViewController,private formBuilder: FormBuilder) {

      console.log('UserId', params.get('userId'));

      this.add = this.formBuilder.group({
        1: ['111', Validators.required],
        2: ['2222',Validators.required],
      });

    }

    ngOnInit() { }


    submit(form){
      console.log(this.add.value);
    }

    save(form){
      console.log(this.add.value);
    }

    cancel(){
      this.viewCtrl.dismiss();
    }



}
