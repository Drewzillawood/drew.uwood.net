import { Component, Input, OnInit } from '@angular/core';
import { Node, Position, State } from './store/node.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromNode from './store/node.reducer';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-node',
  template: `
    <div class="row">
      <app-node-head [position]="node.position"></app-node-head>
      <app-node-body [type]="node.type"></app-node-body>
    </div>`,
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;
  
  constructor(private store: Store<fromNode.State>) {}
  
  ngOnInit(): void {
  
  }
}
