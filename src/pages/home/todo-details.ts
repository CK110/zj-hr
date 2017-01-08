import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  item:any;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
