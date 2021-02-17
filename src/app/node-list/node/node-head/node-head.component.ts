import { AfterViewInit, Component, Input, Renderer2, ViewChild } from '@angular/core';
import { Position } from '../store/node.reducer';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../store/app.reducer';
import * as NodeActions from '../store/node.actions';

@Component({
  selector: 'app-node-head',
  templateUrl: './node-head.component.html',
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements AfterViewInit {
  
  @ViewChild('svg', { static: false }) svg;
  @ViewChild('circle', { static: false }) circle;
  @Input() position: Position;
  
  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2) { }
  
  ngAfterViewInit(): void {
    // this.store.dispatch(new NodeActions.SetNodeCoordinates({ x: 0, y: 0 }));
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
