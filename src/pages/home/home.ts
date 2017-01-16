import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {TodoDetailsPage} from "./todo-details";
import {Todo, TodoService} from './todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[TodoService]
})
export class HomePage {

  todolist:Todo[]= [];


  constructor(public navCtrl: NavController,private todoService:TodoService) {

    this.todolist= todoService.getTodoList();

  }

  openNavDetailsPage(todo) {
    this.navCtrl.push(TodoDetailsPage, { todo: todo });
  }

  doRefresh(refresher){
    console.log('Begin async operation', refresher);

    // 这边换成请求数据，请求成功后必须要有，refresher.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);  }

}
