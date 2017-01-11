import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

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


@Injectable()
export class TodoService {

    constructor(private http:Http) { }


    getTodoList(){
        
    }

}
