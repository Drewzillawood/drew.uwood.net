import {NgModule} from '@angular/core';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeDetailComponent} from './node-detail/node-detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NodeHeadComponent,
    NodeDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NodeHeadComponent,
    NodeDetailComponent,
    CommonModule
  ]
})
export class NodeModule {}
