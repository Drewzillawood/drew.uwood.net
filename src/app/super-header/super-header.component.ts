import {Component} from '@angular/core';
import {Specifications} from '../shared/node/node.model';
import {Position} from '../shared/node/git-graph-dot/git-graph-dot.component';
import {NodeService} from '../shared/node/node.service';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements Specifications {

  position: Position = Position.Default;

  constructor(private nodeService: NodeService) {
    this.nodeService.positionEmitter.next(this.position);
  }
}
