import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {SERVER_URL} from "../../providers/config";

export class Todo{
    "approvable":Boolean;
    "assignee":string[];
    "assigneeMap":Object;
    "assigneeName":string;
    "processDefinitionId":string;
    "processInstanceId":string;
    "processName":string;
    "startTime":any;
    "startTimeString":string;
    "starterId":string;
    "starterName":string;
    "summary":string;
    "taskId":string;
    "taskKey":string;
    "taskName":string;
}

let LISTTODO_URL =SERVER_URL + '/app/bpm/todoTask/listTodoTask'

@Injectable()
export class TodoService {

    constructor(private http:Http) { }


    getTodoList(property?:any){
      let body = new URLSearchParams();

      if(property == null){
        property={"processName":"","starterId":"","orderby":"startTime desc","pageNumber":1,"pageSize":50};
      }

      body.set('___p', JSON.stringify(property));
      body.set('page', '1');
      body.set('rows','50');

      return this.http.post(LISTTODO_URL,body)
        .map(res => res.json().list)
    }

}
