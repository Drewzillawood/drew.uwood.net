import {NgModule} from '@angular/core';
import { LineComponent } from './line/line.component';
import { DotComponent } from './dot/dot.component';
import {CommonModule} from '@angular/common';
import { ConnectorComponent } from './connector/connector.component';
import { ConnectorDirective } from './connector/connector.directive';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent,
    ConnectorComponent,
    ConnectorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    DotComponent,
    CommonModule,
    ConnectorComponent,
    ConnectorDirective
  ]
})
export class SharedModule {}
