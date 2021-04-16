import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coordinates } from './store/node.index';

import * as NodeActions from './store/node.actions';

@Component({
  selector: 'app-node',
  template: `
    <app-node-head></app-node-head>
    <app-node-body></app-node-body>
  `,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements AfterViewInit {
  
  @ViewChild('circle') circle;
  @ViewChild('body', { read: ViewContainerRef, static: false }) viewRef;
  
  constructor(private store: Store) { }
  
  ngAfterViewInit(): void {
    this.DispatchCoordinates();
  }
  
  private DispatchCoordinates(): void {
    const rect = this.circle.nativeElement.getBoundingClientRect();
    const xDiff = (rect.right - rect.left) / 2;
    const yDiff = (rect.bottom - rect.top) / 2;
    const x = rect.left + xDiff;
    const y = rect.top + yDiff;
    this.store.dispatch(NodeActions.initialize({
      coordinates: new Coordinates(x, y)
    }));
  }
}
