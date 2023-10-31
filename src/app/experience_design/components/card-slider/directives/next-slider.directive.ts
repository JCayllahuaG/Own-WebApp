import {
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appNextSlider]',
})
export class NextSliderDirective {
  constructor(private element: ElementRef) {}
  @HostListener('click')
  onClickNext() {
    const elementRef =
      this.element.nativeElement.parentElement.parentElement
        .children[0];
    /*console.log(elementRef);*/
    const item = elementRef.getElementsByClassName('item');
    /*console.log(item);*/
    elementRef.append(item[0]);
  }
}
