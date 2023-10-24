import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-object-dialog',
  templateUrl: './create-object-dialog.component.html',
  styleUrls: ['./create-object-dialog.component.scss']
})
export class CreateObjectDialogComponent implements OnInit{
  @Input() content: any;

  ngOnInit():void{
    console.log(this.content);
  }

}
