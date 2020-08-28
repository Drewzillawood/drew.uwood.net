import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeModule} from './node/node.module';
import {NodeComponent} from './node/node.component';

@NgModule({
  declarations: [
    NodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NodeComponent,
    NodeModule
  ]
})
export class SharedModule {}
