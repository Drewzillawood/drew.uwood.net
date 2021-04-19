import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { NodeService } from '../node.service';

import * as NodeActions from '../store/node.actions';

@Component({
  selector: 'app-node-head',
  template: `
    <svg>
      <circle
        #circle
        cx=50%
        cy=50%
        fill="#008eb5"
        r="12.5"
      />
    </svg>
  `,
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements AfterViewInit {

  @ViewChild('circle', { read: ViewContainerRef, static: false }) circle;
  
  constructor(
    private store: Store,
    private nodeService: NodeService
  ) { }
  
  ngAfterViewInit(): void {
    this.store.dispatch(NodeActions.addHead({
      coordinates: this.nodeService.constructCoordinatesFromRect(this.circle.getBoundingClientRect())
    }));
  }
}
