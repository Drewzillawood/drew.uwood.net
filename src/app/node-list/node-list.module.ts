import { NgModule } from '@angular/core';
import { NodeModule } from './node/node.module';
import { SharedModule } from '../shared/shared.module';
import { NodeListComponent } from './node-list.component';
import { StoreModule } from '@ngrx/store';

import * as fromNodeList from './store/node-list.reducer';

@NgModule({
  declarations: [
    NodeListComponent
  ],
  exports: [
    NodeListComponent
  ],
  imports: [
    SharedModule,
    NodeModule,
    StoreModule.forFeature('nodeList', fromNodeList.nodeListReducer)
  ]
})
export class NodeListModule {}
