import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Manager} from "../model/manager";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManagersService extends BaseService<Manager>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/managers';
  }

}
