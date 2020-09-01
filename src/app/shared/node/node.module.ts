import {NgModule} from '@angular/core';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';
import {NodeComponent} from './node.component';
import {NodeHeadDirective} from './node-head/node-head.directive';
import {NodeDetailDirective} from './node-detail/node-detail.directive';

@NgModule({
  declarations: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent,
    NodeHeadDirective,
    NodeDetailDirective
  ],
  imports: [

  ],
  exports: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent,
    NodeHeadDirective,
    NodeDetailDirective
  ]
})
export class NodeModule {}
