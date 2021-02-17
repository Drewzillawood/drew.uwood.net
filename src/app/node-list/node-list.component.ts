import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Node } from './node/store/node.reducer';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-node-list',
  template: `
    <app-node
      *ngFor="let node of nodes"
      [node]="node"
    ></app-node>`,
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  nodes: Node[];
  
  constructor(private store: Store<fromApp.AppState>) {}
  
  ngOnInit(): void {
    this.store.select('nodeList')
      .subscribe(state => this.nodes = state.nodes);
  }
}
