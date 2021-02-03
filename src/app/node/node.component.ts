import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as NodeActions from './store/node.action';
import {Subscription} from 'rxjs';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeBodyComponent} from './node-body/node-body.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit, AfterViewInit {

  @ViewChild(NodeHeadComponent, { static: false }) head;
  @ViewChild(NodeBodyComponent, { static: false }) body;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.subscription = this.store.select('node').subscribe(stateData => {
      if (stateData !== undefined) {
        // this.renderer.setAttribute(this.path.nativeElement, 'd', stateData.d);
      }
    });
    this.store.dispatch(new NodeActions.MoveLine('M500 500 l100 100'));
  }
}
