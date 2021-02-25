import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Node, NodeState, Position } from './node/store/node.index';
import { SuperHeaderComponent } from '../super-header/super-header.component';
import { IntroductionComponent } from '../introduction/introduction.component';

import * as NodeListActions from './store/node-list.actions';

@Component({
  selector: 'app-node-list',
  template: `
    <app-node
      *ngFor="let node of this.getValues();"
      [node]="node"
    ></app-node>`,
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  nodes: { [key: string]: Node } = {
    [SuperHeaderComponent.name]: {
      type: SuperHeaderComponent.name,
      position: Position.Default
    },
    [IntroductionComponent.name]: {
      type: IntroductionComponent.name,
      position: Position.Bottom
    }
  };
  
  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.store.dispatch(NodeListActions.addNodes(this.castNodeState()));
  }
  
  castNodeState(): { [key: string]: NodeState } {
    const nodes: { [key: string]: NodeState } = {};
    const values = Object.entries(this.nodes).values();
    for (let i = values.next(); !i.done; i = values.next()) {
      nodes[i.value[0]] = { position: i.value[1].position };
    }
    return nodes;
  }
  
  getValues(): Node[] {
    return Object.values(this.nodes);
  }
}
