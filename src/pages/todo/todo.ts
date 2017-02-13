import { Component } from '@angular/core';

import {NavController, PopoverController, ModalController, NavParams} from 'ionic-angular';
import {TodoDetailsPage} from "./todo-details";
import {Todo, TodoService} from './todo.service';
import {ProcessListPage} from "./processlist";

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  todolist:Todo[];


  constructor(public navCtrl: NavController,private todoService:TodoService,
              public popoverCtrl: PopoverController,public modalCtrl: ModalController,private navParams: NavParams) {

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
    console.log('代办任务下拉刷新', refresher);
    this.todoService.getTodoList({}).subscribe( list=>{
      console.log("下拉刷新"+list);
      this.todolist=list;
      refresher.complete();
    })
  }


}
