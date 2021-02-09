import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild, ViewContainerRef} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as NodeActions from './store/node.action';
import {Subscription} from 'rxjs';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeBodyComponent} from './node-body/node-body.component';
import {NodeModel} from './model/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

  @Input() node: NodeModel;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
