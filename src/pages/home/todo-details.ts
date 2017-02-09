import {Component} from "@angular/core";
import {NavParams, ViewController, NavController, AlertController} from "ionic-angular";
import { PhotoViewer } from 'ionic-native';
import {HomePage} from "./home";


@Component({
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo:any;

  constructor(params: NavParams,public viewCtrl: ViewController,public navCtrl:NavController,public alertCtrl: AlertController ) {
    this.todo = params.data.todo;
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  submit(approve){

    this.navCtrl.push(HomePage).then(() => {
      const index = this.viewCtrl.index;
      this.navCtrl.remove(index);
    })

    // this.showAlert();
    // this.viewCtrl.dismiss();

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  /**
   * 查看头像
   * @param pic
   */
  openPhoto(pic){
    PhotoViewer.show('http://cdn-qn0.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png','头像', {share: false});

  }
}
