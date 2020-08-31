import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeModule} from './node/node.module';

@NgModule({
  declarations: [
  ],
  imports: [
    NodeModule,
    CommonModule
  ],
  exports: [
    NodeModule,
    CommonModule
  ]
})
export class SharedModule {}
