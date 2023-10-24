import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateObjectDialogComponent} from "../components/create-object-dialog/create-object-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) {}

  openGenericDialog(component:any){
    this.dialog.open(CreateObjectDialogComponent, {
      data: {content: component}
    })
  }


}
