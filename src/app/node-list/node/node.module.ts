import {NgModule} from '@angular/core';
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

  ],
  exports: [
    NodeComponent
  ],
  providers: [
    NodeBodyService
  ]
})
export class NodeModule { }
