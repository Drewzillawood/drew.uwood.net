import {AfterViewInit, Component, Input, Renderer2, ViewChild} from '@angular/core';
import {Position} from '../model/node.model';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements AfterViewInit {

  @ViewChild('svg', { static: false }) svg;
  @ViewChild('circle', { static: false }) circle;
  @Input() position: Position;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.circle.nativeElement, 'cy', this.determinePosition(this.position));
  }

  determinePosition(position: Position): string {
    switch (position) {
      case Position.Top:
        return '0%';
      case Position.Bottom:
        return '100%';
      default:
        return '50%';
    }
  }
}
