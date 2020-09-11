import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[down]'
})
export class ShiftDownDirective {

  @HostBinding('style.top.%') top: number;
  @HostBinding('style.bottom.%') bottom: number;

  @Input() set down(y: number) {
    this.top = 50 + y;
    this.bottom = 50 - y;
  }
}
