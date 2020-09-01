import {Component, ViewChild} from '@angular/core';
import {NodeModel} from './model/node.model';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @ViewChild(NodeHeadComponent, { static: false }) head: NodeHeadComponent;
  @ViewChild(NodeDetailComponent, { static: false }) body: NodeDetailComponent;

  node: NodeModel = {
    next: null,
    prev: null,
    head: this.head,
    body: this.body
  };

  constructor() { }
}
