import {NgModule} from '@angular/core';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';
import {NodeComponent} from './node.component';

@NgModule({
  declarations: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent
  ],
  imports: [

  ],
  exports: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent
  ]
})
export class NodeModule {}
