import {NgModule} from '@angular/core';
import {NodeComponent} from './node.component';
import {GitGraphDotComponent} from './git-graph-dot/git-graph-dot.component';
import {BodyComponent} from './body/body.component';

@NgModule({
  imports: [],
  declarations: [
    NodeComponent,
    GitGraphDotComponent,
    BodyComponent,
  ],
  exports: [
    NodeComponent,
    GitGraphDotComponent
  ]
})
export class NodeModule { }
