import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {TodoDetailsPage} from "../pages/home/todo-details";
import {ProcessListPage} from "../pages/home/processlist";

import {HRPAGES} from "../pages/hr/index";
import {COMMONPAGES} from "../pages/common/index";

import { Storage } from '@ionic/storage';
import {TutorialPage} from "../pages/tutorial/tutorial";
import {UserData} from "../providers/userdata";
import {LoginPage} from "../pages/login/login";

var config = {
  statusbarPadding: true
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TodoDetailsPage,
    ProcessListPage,
    HRPAGES,
    COMMONPAGES,
    TutorialPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TodoDetailsPage,
    ProcessListPage,
    HRPAGES,
    COMMONPAGES,
    TutorialPage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    UserData
  ]
})
export class AppModule {}
