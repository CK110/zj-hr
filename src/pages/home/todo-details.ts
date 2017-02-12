import {Component} from "@angular/core";
import {NavParams, ViewController, NavController, AlertController, LoadingController} from "ionic-angular";
import { PhotoViewer } from 'ionic-native';
import {HomePage} from "./home";


@Component({
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo:any;

  constructor(params: NavParams,
      public viewCtrl: ViewController,
      public navCtrl:NavController, public alertCtrl: AlertController,
      public loadingCtrl: LoadingController
  ) {
    this.todo = params.data.todo;
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  submit(approve){
    let loading = this.loadingCtrl.create({
      content: '请稍后...'
    });

    loading.present();

    setTimeout(()=>{
        loading.dismiss().then(()=>{
          // this.userData.login(this.login.username);
          this.navCtrl.pop()
        });

    },3000)

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
