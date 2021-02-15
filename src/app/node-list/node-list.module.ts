import { NgModule } from '@angular/core';
import { NodeListComponent } from './node-list.component';
import { NodeModule } from './node/node.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NodeListComponent
  ],
  exports: [
    NodeListComponent
  ],
  imports: [
    NodeModule,
    SharedModule
  ]
})
export class NodeListModule {}
