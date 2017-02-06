import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import { PhotoViewer } from 'ionic-native';


@Component({
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo:any;

  constructor(params: NavParams,public viewCtrl: ViewController) {
    this.todo = params.data.todo;
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  submit(approve){

  }


  /**
   * 查看头像
   * @param pic
   */
  openPhoto(pic){
    PhotoViewer.show('http://cdn-qn0.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png','头像', {share: false});

  }
}
