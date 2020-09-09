import {NgModule} from '@angular/core';
import { LineComponent } from './line/line.component';
import { DotComponent } from './dot/dot.component';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent
  ],
  imports: [],
  exports: [
    LineComponent,
    DotComponent
  ]
})
export class SharedModule {}
