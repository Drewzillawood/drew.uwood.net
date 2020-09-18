import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {GridService} from '../grid-utility/grid.service';
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

  constructor(private elRef: ElementRef,
              private gridService: GridService) {}

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    const p1Rect = this.p1.nativeElement.getBoundingClientRect();
    const p2Rect = this.p2.nativeElement.getBoundingClientRect();

    const dx = p2Rect.x - p1Rect.x;
    const dy = p1Rect.y - p2Rect.y;

    // this.elRef.nativeElement.style.setProperty('width', `${p2Rect.x - p1Rect.x}px`);
    const angle = Math.atan(dx / dy);
    const distance = this.gridService.distance(new CoordinateModel(p1Rect), new CoordinateModel(p2Rect));
    this.elRef.nativeElement.style.setProperty('height', `${distance}px`);
    this.elRef.nativeElement.style.setProperty('top', `${p1Rect.y - dy - 12.5 - 2.5 }px`);
    this.elRef.nativeElement.style.setProperty('left', `${p1Rect.x + dx / 2 - 2.5 }px`);
    this.elRef.nativeElement.style.setProperty('transform', `rotate(${angle}rad)`);
  }
}
