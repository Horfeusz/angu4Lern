import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColores]'
})
export class ColoresDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private element: ElementRef) {
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
