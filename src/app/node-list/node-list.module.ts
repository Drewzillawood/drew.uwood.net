import {NgModule} from '@angular/core';
import {NodeListComponent} from './node-list.component';
import {NodeModule} from './node/node.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';

import * as fromNodeList from './store/node-list.reducer';

@NgModule({
  declarations: [
    NodeListComponent
  ],
  exports: [
    NodeListComponent
  ],
  imports: [
    NodeModule,
    SharedModule,
    StoreModule.forFeature('nodeListModule', fromNodeList.nodeListReducer)
  ]
})
export class NodeListModule { }
