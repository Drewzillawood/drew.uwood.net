import {Directive, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {CoordinateModel} from '../grid-utility/coordinate.model';
import {GridService} from '../grid-utility/grid.service';

@Directive({
  selector: '[start]'
})
export class ConnectorDirective implements OnInit {

  @HostBinding('style.top.px') top: number;
  @HostBinding('style.bottom.px') bottom: number;
  @HostBinding('style.left.px') left: number;
  @HostBinding('style.right.px') right: number;
  @HostBinding('style.height.px') height: number;

  @Input() set start(p1: ElementRef) { this.p1 = p1; }
  @Input() set end(p2: ElementRef) { this.p2 = p2; }

  p1: ElementRef;
  p2: ElementRef;

  constructor(private elRef: ElementRef,
              private gridService: GridService) {}

  ngOnInit(): void {
    const start = new CoordinateModel(this.p1.nativeElement.parentElement.getBoundingClientRect());
    const end = new CoordinateModel(this.p2.nativeElement.parentElement.getBoundingClientRect());
    this.height = this.gridService.distance(start, end);
    this.left = this.right = start.x + this.height / 2 - 15;
    this.top = this.bottom = start.y - this.height / 2;
  }
}
