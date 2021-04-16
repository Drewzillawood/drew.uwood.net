import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './node.component';
import { NodeBodyComponent } from './node-body/node-body.component';
import { NodeBodyService } from './node-body/node-body.service';
import { NodeHeadComponent } from './node-head/node-head.component';

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
    NodeBodyService
  ]
})
export class NodeModule { }
