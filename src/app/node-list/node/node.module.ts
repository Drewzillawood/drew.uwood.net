import { NgModule } from '@angular/core';
import { NodeComponent } from './node.component';
import { NodeHeadComponent } from './node-head/node-head.component';
import { NodeBodyComponent } from './node-body/node-body.component';
import { NodeBodyService } from './node-body/node-body.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NodeComponent,
    NodeHeadComponent,
    NodeBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NodeComponent
  ],
  providers: [
    NodeBodyService
  ]
})
export class NodeModule {}
