import { Component } from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {UserData} from "../../providers/userdata";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,
              public menu: MenuController) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    // this.navCtrl.push(SignupPage);
  }

}
