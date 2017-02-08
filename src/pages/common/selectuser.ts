import { Component, OnInit } from '@angular/core';
import {ViewController, NavController} from "ionic-angular";
import {AddContractPage} from "../hr/personnel/contract/add/addcontract";

@Component({
    selector: 'page-selectuser',
    templateUrl: 'selectuser.html'
})
export class SelectUserPage implements OnInit{
  items:any[];

  constructor(public viewCtrl: ViewController,private navCtrl:NavController) {
    this.initializeItems();
  }

  ngOnInit(){

  }

  initializeItems() {
    this.items = [
      '张三',
      '李四',
      '李四四',
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  cancel(){
    this.viewCtrl.dismiss();
  }

  /**
   * 跳转到AddPage
   */
  toAddPage(){
    console.log('toAddPAGE');
    this.navCtrl.push(AddContractPage);

  }

}
