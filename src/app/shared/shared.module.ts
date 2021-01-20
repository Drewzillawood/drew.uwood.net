import {NgModule} from '@angular/core';
import {LineComponent} from './line/line.component';
import {DotComponent} from './dot/dot.component';
import {CommonModule} from '@angular/common';
import {ConnectorComponent} from './connector/connector.component';
import {NodeModule} from './node/node.module';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent,
    ConnectorComponent,
  ],
  imports: [
    CommonModule,
    NodeModule
  ],
  exports: [
    NodeModule,
    LineComponent,
    DotComponent,
    CommonModule,
    ConnectorComponent,
    DotComponent
  ]
})
export class SharedModule {}
