import { Component, OnInit } from '@angular/core';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as NodeListActions from './node-list/store/node-list.actions';
import { Node, Position } from './node-list/node/store/node.reducer';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  template: '<app-node-list></app-node-list>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drew.uwood.net';
  
  nodes: Node[] = [
    {
      type: SuperHeaderComponent.name,
      position: Position.Default
    },
    {
      type: IntroductionComponent.name,
      position: Position.Bottom
    }
  ];
  
  constructor(private store: Store<fromApp.AppState>) {}
  
  ngOnInit(): void {
    this.store.dispatch(new NodeListActions.SetNodes(this.nodes));
  }
}
