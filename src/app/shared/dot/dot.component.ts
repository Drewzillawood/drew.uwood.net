import {Component, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent {

  @Input() set offset(y: number) {
    this.setOffset(y);
  }

  constructor(public elRef: ElementRef) {
    this.setOffset(50);
  }

  setOffset(y: number) {
    this.elRef.nativeElement.style.setProperty('top', `${y}%`);
    this.elRef.nativeElement.style.setProperty('bottom', `${100 - y}%`);
  }
}
