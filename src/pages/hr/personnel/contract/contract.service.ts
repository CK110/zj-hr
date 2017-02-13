import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {SERVER_URL} from "../../../../providers/config";

export class TaskInfo {
  approvable:boolean;
  assignee:any;
  assigneeMap:Object;
  assigneeName:string;
  processDefinitionId:string;
  processInstanceId:string;
  startTime:any;
  startTimeString:string;
  taskId:string;
  taskKey:string;
  taskName:string;
}

let INITAPPROVE_URL =SERVER_URL + '/hr/personnel/contract/approveContractInit';

@Injectable()
export class ContractService {

  constructor(private http:Http) { }


  initApprove(param){
    let body = new URLSearchParams();
    // var postParam = {"taskid":param.taskId};
    body.set('___p', JSON.stringify(param));

    return this.http.post(INITAPPROVE_URL,body)
      .map(res => res.json().contract)
  }

}
