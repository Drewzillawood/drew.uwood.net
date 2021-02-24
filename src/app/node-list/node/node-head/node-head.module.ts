import { NgModule } from '@angular/core';
import { NodeHeadComponent } from './node-head.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    NodeHeadComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NodeHeadComponent
  ]
})
export class NodeHeadModule {}
