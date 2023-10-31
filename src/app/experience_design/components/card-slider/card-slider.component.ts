import { Component } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss'],
})
export class CardSliderComponent {
  swiperCardsAmount = [{}, {}, {}, {}];

  slidesPerView: number = 3;
}
