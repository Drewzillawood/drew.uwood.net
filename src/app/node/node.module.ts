import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NodeComponent} from './node.component';
import {NodeHeadComponent} from './node-head/node-head.component';
import {NodeBodyComponent} from './node-body/node-body.component';
import {NodeBodyService} from './node-body/node-body.service';

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
export class NodeModule { }
