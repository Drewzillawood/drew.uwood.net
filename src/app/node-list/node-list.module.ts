import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeListComponent } from './node-list.component';
import {NodeModel} from './node/model/node.model';
import {NodeModule} from './node/node.module';
import {SharedModule} from '../shared/shared.module';

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
export class NodeListModule { }
