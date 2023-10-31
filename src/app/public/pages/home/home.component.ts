import {
  Component,
  ViewContainerRef,
  OnInit,
  ViewChild,
  inject,
  ChangeDetectorRef,
  QueryList,
  ViewChildren,
  ComponentFactoryResolver,
} from '@angular/core';
import { CardSliderComponent } from '../../../experience_design/components/card-slider/card-slider.component';
import { ExperienceSearchBarComponent } from '../../../experience_design/components/experience-search-bar/experience-search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('placeToRender', { read: ViewContainerRef })
  placeToRender!: ViewContainerRef;

  gridColsMaxAmount = 5;
  windowHeight: number = 0;
  gridHeight: number = 0;
  rowHeight: number = 0;
  constructor(vcr: ViewContainerRef) {
    this.placeToRender = vcr;
  }
  ngOnInit(): void {
    console.log(
      'window inner height: ' + window.innerHeight
    );

    this.gridHeight = window.innerHeight / 8;
    this.rowHeight = this.gridHeight - 2;
    console.log('grid row height' + this.gridHeight);
  }

  onResize(event: any) {
    this.gridHeight =
      event.target.innerHeight <= 1200
        ? window.innerHeight / 8
        : window.innerHeight / 8;
    this.rowHeight = this.gridHeight - 2;
  }
  getScreenType() {
    if (window.innerWidth < 1200) {
      this.gridColsMaxAmount = 3;
      return 'mobile';
    }
    this.gridColsMaxAmount = 5;
    return 'desktop';
  }
  getGridCols() {
    return this.gridColsMaxAmount;
  }

  protected readonly eval = eval;
}
