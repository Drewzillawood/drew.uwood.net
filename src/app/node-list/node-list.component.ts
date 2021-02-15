import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { Observable } from 'rxjs';
import { NodeModel } from './node/model/node.model';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  
  nodes: Observable<{ nodes: NodeModel[] }>;
  
  constructor(private store: Store<fromApp.AppState>) { }
  
  ngOnInit(): void {
    this.nodes = this.store.select('nodeList');
  }
}
