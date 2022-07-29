import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundHighlight]',
})
export class BackgroundHighlightDirective {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
