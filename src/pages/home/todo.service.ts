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
      let todoList= [
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"computerApp:2:4804",
            "processInstanceId":"286732",
            "processName":"笔记本电脑申请",
            "startTime":1480486093000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 入职日期：2016-07-01 采购提供品牌：21212 采购建议价格：8,900.00",
            "taskId":"287610",
            "taskKey":"usertask17",
            "taskName":"修改申请"
          },
          {
            "approvable":false,
            "assignee":[
              "10003765"
            ],
            "assigneeMap":{
              "10003765":"陈武军"
            },
            "assigneeName":"陈武军",
            "processDefinitionId":"socialRemote:1:96",
            "processInstanceId":"287539",
            "processName":"异地缴交社保/公积金申请",
            "startTime":1480475432000,
            "startTimeString":"2016-11-30",
            "starterId":"10003765",
            "starterName":"陈武军",
            "summary":"申请人：陈武军 所属部门：产品测试部 工作岗位：副经理 申请缴交城市：安徽安庆 ",
            "taskId":"287543",
            "taskKey":"usertask10",
            "taskName":"提交新申请"
          }]

      return todoList;
    }

}
