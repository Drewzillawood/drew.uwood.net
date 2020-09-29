import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {CoordinateModel} from '../grid-utility/coordinate.model';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements AfterViewInit {

  @Input() set start(p1: ElementRef) { this.p1 = p1; }
  @Input() set end(p2: ElementRef) { this.p2 = p2; }

  p1: ElementRef;
  p2: ElementRef;
  d: string;
  width: number;

  constructor() {}

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    const p1Rect = new CoordinateModel(this.p1.nativeElement.getBoundingClientRect());
    const p2Rect = new CoordinateModel(this.p2.nativeElement.getBoundingClientRect());

    const dx = p2Rect.x - p1Rect.x;
    const dy = p1Rect.y - p2Rect.y;

    this.d = `M${52.5} ${p1Rect.y}\
              c${0} ${-dy / 2},\
               ${dx} ${-dy / 2},\
               ${dx} ${-dy}`;
  }
}
