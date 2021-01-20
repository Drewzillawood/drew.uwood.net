import {Component, ComponentRef, Input, Type, ViewChild} from '@angular/core';
import {GitGraphDotComponent, Position} from './git-graph-dot/git-graph-dot.component';
import {NodeService} from './node.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {

  @ViewChild(GitGraphDotComponent, { static: false }) head: ComponentRef<GitGraphDotComponent>;
  @Input() type: Type<any>;

  getBottom(): Position {
    return Position.Bottom;
  }

  constructor(private nodeService: NodeService) {}

  onBodyInit($event: ComponentRef<Specifications>): void {
    this.nodeService.add(this.head, $event);
  }
}
