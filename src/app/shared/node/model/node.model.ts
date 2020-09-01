import {NodeHeadComponent} from '../node-head/node-head.component';
import {NodeDetailComponent} from '../node-detail/node-detail.component';
import {ViewChild} from '@angular/core';

export class NodeModel {
  constructor(public next: NodeModel,
              public prev: NodeModel,
              @ViewChild(NodeHeadComponent, { static: false }) public head: NodeHeadComponent,
              @ViewChild(NodeDetailComponent, { static: false }) public body: NodeDetailComponent) {
  }
}
