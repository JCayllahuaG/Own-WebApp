import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {

  experienceImageUrl:string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  @Input() cardData: any;


}
