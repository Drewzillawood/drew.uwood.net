import {NgModule} from '@angular/core';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';
import {NodeComponent} from './node.component';
import {NodeHeadDirective} from './node-head/node-head.directive';
import {NodeDetailDirective} from './node-detail/node-detail.directive';
import {NodeDirective} from './node.directive';

@NgModule({
  declarations: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent,
    NodeDirective,
    NodeHeadDirective,
    NodeDetailDirective
  ],
  imports: [

  ],
  exports: [
    NodeComponent,
    NodeHeadComponent,
    NodeDetailComponent,
    NodeDirective,
    NodeHeadDirective,
    NodeDetailDirective
  ]
})
export class NodeModule {}
