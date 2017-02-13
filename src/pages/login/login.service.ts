import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http,URLSearchParams} from "@angular/http";
import {SERVER_URL} from '../../providers/config'

let LOGIIN_HREF = SERVER_URL+"/app/auth/login/login";


/**
 * 用户登录service
 */
@Injectable()
export class LoginService {

  constructor(public http:Http){

  }

  login(property):any{
    let body = new URLSearchParams();
    body.set('___p', JSON.stringify(property));

    return this.http.post(LOGIIN_HREF,body)
      .map(res => res.json())
  }

}
