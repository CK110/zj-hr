import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'todo-details.html',
})
export class TodoDetailsPage {
  todo:any;

  constructor(params: NavParams) {
    this.todo = params.data.todo;
  }
}
