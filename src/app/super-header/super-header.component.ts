import {Component, ViewChild} from '@angular/core';
import {Specifications} from '../shared/node/node.model';
import {GitGraphDotComponent, Position} from '../shared/node/git-graph-dot/git-graph-dot.component';
import {GitGraphDotService} from '../shared/node/git-graph-dot/git-graph-dot.service';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements Specifications {

  position: Position = Position.Default;

  constructor(private gitGraphDotService: GitGraphDotService) {
    this.gitGraphDotService.redrawSubject.next(this.position);
  }
}
