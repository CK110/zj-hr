import { Component } from '@angular/core';
import {NavController, MenuController, LoadingController,AlertController} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {UserData} from "../../providers/userdata";
import {TabsPage} from "../tabs/tabs";
import {LoginService} from "./login.service";
import {TodoService} from "../todo/todo.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public userData: UserData,
    public menu: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public loginService:LoginService,
    public alertCtrl: AlertController,public todoService:TodoService) {

      this.loginForm = this.formBuilder.group({
        userid: ['', Validators.required],
        password: ['',Validators.required],
      });
  }

  onLogin() {
    if(this.loginForm.valid){

      let loading = this.loadingCtrl.create({
        content: '请稍后...'
      });

      loading.present();

      this.loginService.login(this.loginForm.value).subscribe(data =>{
        console.log(data.retMsg);
        if(data.retMsg.code == 1){
          // this.todoService.getTodoList().subscribe(list=>{
          //   loading.dismiss().then(()=>{
          //     //登录信息存储到localStage
          //     this.userData.loginSuccess(this.loginForm.value.username);
          //
          //       this.navCtrl.push(TabsPage,{todolist:list});
          //     })
          // });
          loading.dismiss().then(()=>{
            //登录信息存储到localStage
            this.userData.loginSuccess(this.loginForm.value.username);

            this.navCtrl.push(TabsPage);
          })
        }else{
          let confirm = this.alertCtrl.create({
            message: '账号/密码错误或账号密码组合错误。详情请查看帮助',
            buttons: [
              {
                text: '取消',
                handler: () => {
                  console.log('点击取消');
                }
              },
              {
                text: '帮助',
                handler: () => {
                  console.log('点击帮助');
                }
              }
            ]
          });
          loading.dismiss().then(()=>{
            confirm.present();
          });
        }
      })
    }
  }

}
