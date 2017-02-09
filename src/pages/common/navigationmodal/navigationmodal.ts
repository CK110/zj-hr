import { Component } from '@angular/core';
import {SelectUserPage} from "../selectuser";


@Component({
  selector: 'navigation-modal',
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class NavigationModal {

  root = SelectUserPage;

  constructor() {

  }

}
