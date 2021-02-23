import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinates, Node, Position } from './store/node.index';

import { map } from 'rxjs/operators';
import * as fromNode from './store/node.index';
import * as fromNodeHead from './node-head/store/node-head.reducer';
import * as fromNodeList from '../store/node-list.index';
import * as NodeAction from './store/node.actions';
import * as NodeListAction from '../store/node-list.actions';

@Component({
  selector: 'app-node',
  template: `
    <div class="row">
      <app-node-head [position]="node.position"></app-node-head>
      <app-node-body [type]="node.type"></app-node-body>
    </div>`,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: Node;
  @Input() index: number;
  
  constructor() {}
}
