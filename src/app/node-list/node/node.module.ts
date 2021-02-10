import {NgModule} from '@angular/core';
import {NodeComponent} from './node.component';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeBodyComponent} from './node-body/node-body.component';
import {NodeBodyService} from './node-body/node-body.service';
import {StoreModule} from '@ngrx/store';

import * as fromNode from './store/node.reducer';

@NgModule({
  declarations: [
    NodeComponent,
    NodeHeadComponent,
    NodeBodyComponent
  ],
  imports: [
    StoreModule.forFeature('nodeModule', fromNode.nodeReducer)
  ],
  exports: [
    NodeComponent
  ],
  providers: [
    NodeBodyService
  ]
})
export class NodeModule { }
