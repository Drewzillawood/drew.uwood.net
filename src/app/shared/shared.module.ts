import {NgModule} from '@angular/core';
import {LineComponent} from './line/line.component';
import {DotComponent} from './dot/dot.component';
import {CommonModule} from '@angular/common';
import {ConnectorComponent} from './connector/connector.component';
import { NodeComponent } from './node/node.component';
import { GitGraphDotComponent } from './node/git-graph-dot/git-graph-dot.component';
import { BodyComponent } from './node/body/body.component';

@NgModule({
  declarations: [
    LineComponent,
    DotComponent,
    ConnectorComponent,
    NodeComponent,
    GitGraphDotComponent,
    BodyComponent,
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
    NodeComponent,
  ]
})
export class SharedModule {}
