import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {

  experienceImageUrl:string = "https://i.pinimg.com/736x/ac/50/d1/ac50d1d14bbe26811dc5d15844bb5ec6.jpg";
  @Input() cardData: any;
}
