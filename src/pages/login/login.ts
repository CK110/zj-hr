import { Component } from '@angular/core';
import {NavController, MenuController, LoadingController} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {UserData} from "../../providers/userdata";
import {TabsPage} from "../tabs/tabs";

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
    private formBuilder: FormBuilder) {

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['',Validators.required],
      });
  }

  onLogin() {
    let loading = this.loadingCtrl.create({
      content: '请稍后...'
    });

    loading.present();

    setTimeout(()=>{
      if(this.loginForm.valid){
        loading.dismiss().then(()=>{
          // this.userData.login(this.login.username);
          this.navCtrl.push(TabsPage);
        });
      }
    },3000)
  }

}
