import { Component } from '@angular/core';

import {NavController, LoadingController} from 'ionic-angular';
import {TodoDetailsPage} from "./todo-details";
import {Todo, TodoService} from './todo.service';
import {ApproveContractPage} from "../hr/personnel/contract/approve/approvecontract";
import {ProcessListPage} from "./processlist";

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  type: string = "myApprove"; // 审批类型: 待我审批/我申请的

  todolist:Todo[];


  constructor(public navCtrl: NavController,private todoService:TodoService,
              public loadingCtrl:LoadingController) {

    let loading = this.loadingCtrl.create({
    });
    loading.present();

    this.todoService.getTodoList().subscribe( list=>{
      console.log(list);
      this.todolist=list;
      loading.dismiss();
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
    if(todo.processName == "续订劳动合同申请"){

      this.navCtrl.push(ApproveContractPage, { taskid:  {"taskid":todo.taskId} });

    }else{
      this.navCtrl.push(TodoDetailsPage, { todo: todo });

      // this.navCtrl.parent.push(TodoDetailsPage, { todo: todo })
    }

  }

  /**
   * 下拉刷新
   * @param refresher
   */
  doRefresh(refresher){
    console.log('代办任务下拉刷新', refresher);
    this.todoService.getTodoList().subscribe( list=>{
      console.log(list);
      this.todolist=list;
      refresher.complete();
    })
  }
}
