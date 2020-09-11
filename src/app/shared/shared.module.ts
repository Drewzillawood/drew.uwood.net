import {NgModule} from '@angular/core';
import { LineComponent } from './line/line.component';
import { DotComponent } from './dot/dot.component';
import {CommonModule} from '@angular/common';
import { ConnectorComponent } from './connector/connector.component';
import { ConnectorDirective } from './connector/connector.directive';
import {ShiftUpDirective} from './dot/shift-up.directive';
import {ShiftDownDirective} from './dot/shift-down.directive';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent,
    ConnectorComponent,
    ConnectorDirective,
    ShiftUpDirective,
    ShiftDownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LineComponent,
    DotComponent,
    CommonModule,
    ConnectorComponent,
    ConnectorDirective,
    ShiftUpDirective,
    ShiftDownDirective
  ]
})
export class SharedModule {}
