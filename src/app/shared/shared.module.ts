import {NgModule} from '@angular/core';
import { LineComponent } from './line/line.component';
import { DotComponent } from './dot/dot.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    DotComponent,
    CommonModule
  ]
})
export class SharedModule {}
