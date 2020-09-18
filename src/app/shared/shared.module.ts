import {NgModule} from '@angular/core';
import { LineComponent } from './line/line.component';
import { DotComponent } from './dot/dot.component';
import {CommonModule} from '@angular/common';
import { ConnectorComponent } from './connector/connector.component';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent,
    ConnectorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    DotComponent,
    CommonModule,
    ConnectorComponent,
    DotComponent,
  ]
})
export class SharedModule {}
