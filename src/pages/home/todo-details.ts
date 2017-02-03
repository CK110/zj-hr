import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

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
}
