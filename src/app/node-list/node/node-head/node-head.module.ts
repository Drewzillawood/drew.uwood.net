import { NgModule } from '@angular/core';
import { NodeHeadComponent } from './node-head.component';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';

import * as fromNodeHead from './store/node-head.reducer';

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
