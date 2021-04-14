import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeModule } from './node/node.module';
import { NodeListComponent } from './node-list.component';
import { StoreModule } from '@ngrx/store';

import * as fromNodeList from './store/node-list.reducers';

@NgModule({
  declarations: [
    NodeListComponent
  ],
  imports: [
    NodeModule,
    CommonModule,
    StoreModule.forFeature('nodeList', fromNodeList.nodeListReducer)
  ],
  exports: [
    NodeListComponent
  ]
})
export class NodeListModule { }
