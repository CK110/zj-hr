import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TodoPage} from '../pages/todo/todo';
import { TabsPage } from '../pages/tabs/tabs';
import {TodoDetailsPage} from "../pages/todo/todo-details";
import {ProcessListPage} from "../pages/todo/processlist";

import {HRPAGES} from "../pages/hr/index";
import {COMMONPAGES} from "../pages/common/index";

import { Storage } from '@ionic/storage';
import {TutorialPage} from "../pages/tutorial/tutorial";
import {UserData} from "../providers/userdata";
import {LoginPage} from "../pages/login/login";
import {LoginService} from "../pages/login/login.service";
import {TodoService} from "../pages/todo/todo.service";

var config = {
  statusbarPadding: true
}

const OTHERPAGES=[
  AboutPage,
  ContactPage,
  TodoPage,
  TabsPage,
  TodoDetailsPage,
  ProcessListPage,
  TutorialPage,
  LoginPage
]

@NgModule({
  declarations: [
    MyApp,
    OTHERPAGES,
    HRPAGES,
    COMMONPAGES
  ],
  imports: [
    IonicModule.forRoot(MyApp,config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OTHERPAGES,
    HRPAGES,
    COMMONPAGES
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    UserData,
    LoginService,
    TodoService
]
})
export class AppModule {}
