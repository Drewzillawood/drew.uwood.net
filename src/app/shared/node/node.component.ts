import {Component, ComponentRef, Input, OnInit, Type, ViewChild} from '@angular/core';
import {GitGraphDotComponent} from './git-graph-dot/git-graph-dot.component';
import {NodeService} from './node.service';
import {Specifications} from './node.model';
import {NodeSingletonService} from './node-singleton.service';
import {GitGraphDotService} from './git-graph-dot/git-graph-dot.service';
import {CoordinateModel} from '../grid-utility/coordinate.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  providers: [NodeService, GitGraphDotService]
})
export class NodeComponent implements OnInit {

  @ViewChild(GitGraphDotComponent, { static: false }) head: ComponentRef<GitGraphDotComponent>;
  @Input() type: Type<any>;

  constructor(private nodeService: NodeService,
              private nodeLinkedListService: NodeSingletonService,
              private gitGraphDotService: GitGraphDotService) {}

  ngOnInit(): void {
    this.gitGraphDotService.positionSubject.subscribe((coordinateModel: CoordinateModel) => {

    });

    this.nodeService.componentAssignedSubject.subscribe((componentRef: ComponentRef<Specifications>) => {
      this.nodeLinkedListService.add(this.head, componentRef);
      this.nodeService.node = this.nodeLinkedListService.node.prev;
    });
  }
}
