import { NgModule } from '@angular/core';
import { NodeModule } from './node/node.module';
import { SharedModule } from '../shared/shared.module';
import { NodeListComponent } from './node-list.component';

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
  ]
})
export class NodeListModule {}
