import { AfterViewInit, Component, Input, Renderer2, ViewChild } from '@angular/core';
import { Node, Position } from '../store/node.index';
import { Store } from '@ngrx/store';

import * as fromNodeHead from './store/node-head.index';
import * as NodeHeadActions from './store/node-head.actions';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements AfterViewInit {
  @ViewChild('svg', { static: false }) svg;
  @ViewChild('circle', { static: false }) circle;
  @Input() node: Node;
  
  constructor(private store: Store,
              private renderer: Renderer2) { }
  
  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.circle.nativeElement, 'cy', this.determinePosition(this.node.position));
    this.store.dispatch(NodeHeadActions.setNodeHeadCoordinates({
      key: this.node.type,
      coordinates: {
        x: this.circle.nativeElement.getBoundingClientRect().x,
        y: this.circle.nativeElement.getBoundingClientRect().y
      }
    }));
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
