import {Component, Input, OnInit} from '@angular/core';
import {NodeModel} from './node/model/node.model';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {

  @Input() nodes: NodeModel[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

  }
}
