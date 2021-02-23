import { NgModule } from '@angular/core';
import { NodeComponent } from './node.component';
import { NodeBodyComponent } from './node-body/node-body.component';
import { NodeBodyService } from './node-body/node-body.service';
import { CommonModule } from '@angular/common';

import { NodeHeadModule } from './node-head/node-head.module';

@NgModule({
  declarations: [
    NodeComponent,
    NodeBodyComponent
  ],
  imports: [
    CommonModule,
    NodeHeadModule
  ],
  exports: [
    NodeComponent
  ],
  providers: [
    NodeBodyService
  ]
})
export class NodeModule {}
