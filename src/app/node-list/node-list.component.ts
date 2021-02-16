import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { Node } from './node/store/node.reducer';

@Component({
  selector: 'app-node-list',
  template: `
    <app-node
      *ngFor="let node of (nodes | async).nodes"
      [node]="node"
    ></app-node>`,
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  nodes: Observable<{ nodes: Node[] }>;
  
  constructor(private store: Store<fromApp.AppState>) {}
  
  ngOnInit(): void {
    this.nodes = this.store.select('nodeList');
  }
}
