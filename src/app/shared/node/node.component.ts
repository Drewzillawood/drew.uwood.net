import {Component, ComponentRef, Input, Type, ViewChild} from '@angular/core';
import {GitGraphDotComponent} from './git-graph-dot/git-graph-dot.component';
import {NodeService} from './node.service';
import {Specifications} from './node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  providers: [NodeService]
})
export class NodeComponent {

  @ViewChild(GitGraphDotComponent, { static: false }) head: ComponentRef<GitGraphDotComponent>;
  @Input() type: Type<any>;

  constructor(private nodeService: NodeService) {}

  onBodyInit($event: ComponentRef<Specifications>): void {
    this.nodeService.add(this.head, $event);
  }
}
