import {Component, ElementRef, Input} from '@angular/core';
import {CoordinateModel} from '../grid-utility/coordinate.model';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent {

  @Input() set start(p1: ElementRef) { this.p1 = p1; }
  @Input() set end(p2: ElementRef) { this.p2 = p2; }
  @Input() set stroke(color: string) { this.color = color; }

  p1: ElementRef;
  p2: ElementRef;
  color: string;
  d: string;
  width: number;

  constructor() {}

  onResize(): void {
    this.draw();
  }

  draw(): void {
    const p1Rect = new CoordinateModel(this.p1.nativeElement.getBoundingClientRect());
    const p2Rect = new CoordinateModel(this.p2.nativeElement.getBoundingClientRect());

    const dx = p2Rect.x - p1Rect.x;
    const dy = p1Rect.y - p2Rect.y;

    this.d = `M${this.p1.nativeElement.offsetLeft + 12.5} ${this.p1.nativeElement.offsetTop + 12.5}\
              c${0} ${-dy / 2},\
               ${dx} ${-dy / 2},\
               ${dx} ${-dy}`;
  }
}
