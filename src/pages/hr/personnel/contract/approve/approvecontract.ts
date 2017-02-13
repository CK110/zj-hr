import { Component } from '@angular/core';
import {NavParams, NavController, LoadingController} from "ionic-angular";
import {ContractService, TaskInfo} from "../contract.service";

@Component({
  templateUrl: 'approvecontract.html',
  providers:[ContractService]
})
export class ApproveContractPage {

  contract: any = new Object();
  approvalList:any = new Object();
  taskInfo:TaskInfo = new TaskInfo();

  constructor(public navParams: NavParams,
    public navCtrl:NavController,
    public loadingCtrl: LoadingController,
    public contractService: ContractService) {

    this.contractService.initApprove(this.navParams.get('taskid'))
      .subscribe(res => {
        this.contract = res.contract;
        this.approvalList= res.approvalList;
        this.taskInfo = res.taskInfo[0];

        console.log(this.taskInfo);
      })
  }

  ngOnInit(){

    // this.contractService.initApprove(this.navParams.get('taskid'))
    //   .subscribe(res => {
    //     this.contract = res.contract;
    //     this.approvalList= res.approvalList;
    //     this.taskInfo = res.taskInfo[0];
    //
    //     console.log(this.taskInfo);
    //   })
  }

  submit(approve){
    let loading = this.loadingCtrl.create({
      content: '请稍后...'
    });

    loading.present();

    setTimeout(()=>{
      loading.dismiss().then(()=>{
        // this.userData.login(this.login.username);
        this.navCtrl.pop()
      });

    },3000)

  }

}
