import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Node, Position } from './node/store/node.index';
import { SuperHeaderComponent } from '../super-header/super-header.component';
import { IntroductionComponent } from '../introduction/introduction.component';

import * as fromNodeList from './store/node-list.index';
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
    this.store.dispatch(NodeListActions.addNodes(this.nodes));
  }
  
  getValues(): Node[] {
    return Object.values(this.nodes);
  }
}
