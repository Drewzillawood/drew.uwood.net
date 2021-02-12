import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NodeModel} from './model/node.model';

import * as fromNodeList from '../store/node-list.reducer';
import * as NodeListActions from '../store/node-list.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

  @Input() node: NodeModel;

  constructor(private store: Store<fromNodeList.State>) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.store.dispatch(new NodeListActions.AddNode(this.node));
  }
}
