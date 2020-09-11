import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  @HostBinding('style.top.%') top: number;
  @HostBinding('style.bottom.%') bottom: number;

  constructor(public elRef: ElementRef) {

  }

  ngOnInit(): void {
    this.top = 50;
    this.bottom = 50;
  }
}
