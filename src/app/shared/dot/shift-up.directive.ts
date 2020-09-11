import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[up]'
})
export class ShiftUpDirective {

  @HostBinding('style.top.%') top: number;
  @HostBinding('style.bottom.%') bottom: number;

  @Input() set up(y: number) {
    this.top = 50 - y;
    this.bottom = 50 + y;
  }
}
