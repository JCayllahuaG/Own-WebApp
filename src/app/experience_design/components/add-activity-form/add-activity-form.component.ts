import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-activity-form',
  templateUrl: './add-activity-form.component.html',
  styleUrls: ['./add-activity-form.component.scss']
})
export class AddActivityFormComponent {
  activityFormControl = new FormControl('', [Validators.required]);
  activityNamePlaceholder = "Choose a good name to describe your activity.";
}
