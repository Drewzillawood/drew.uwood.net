import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { NodeBodyComponent } from './node-body/node-body.component';
import { NodeHeadComponent } from './node-head/node-head.component';
import { NodeService } from './node.service';

@NgModule({
  declarations: [
    NodeComponent,
    NodeBodyComponent,
    NodeHeadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NodeComponent
  ],
  providers: [
    NodeService
  ]
})
export class NodeModule { }
