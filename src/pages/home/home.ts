import { Component } from '@angular/core';

import {NavController, PopoverController, ModalController} from 'ionic-angular';
import {TodoDetailsPage} from "./todo-details";
import {Todo, TodoService} from './todo.service';
import {ProcessListPage} from "./processlist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[TodoService]
})
export class HomePage {

  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  todolist:Todo[];


  constructor(public navCtrl: NavController,private todoService:TodoService,
              public popoverCtrl: PopoverController,public modalCtrl: ModalController) {

    this.todoService.getTodoList({}).subscribe( list=>{
      console.log(list);
      this.todolist=list;
    })

  }




  /**
   * 跳转到流程列表页
   */
  processList(){
    this.navCtrl.push(ProcessListPage);

  }

  /**
   * 跳转到流程审批详细页
   * @param todo
   */
  openNavDetailsPage(todo) {
    this.navCtrl.push(TodoDetailsPage, { todo: todo });

    // let modal = this.modalCtrl.create(TodoDetailsPage, { todo: todo });
    // modal.present();

  }

  /**
   * 下拉刷新
   * @param refresher
   */
  doRefresh(refresher){
    console.log('Begin async operation', refresher);

    // 这边换成请求数据，请求成功后必须要有，refresher.complete();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


}
