import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NodeService} from '../node.service';

export enum Position {Default, Top, Bottom}

@Component({
  selector: 'app-git-graph-dot',
  templateUrl: './git-graph-dot.component.html',
  styleUrls: ['./git-graph-dot.scss']
})
export class GitGraphDotComponent implements OnInit {

  private moveSubscription: Subscription;

  constructor(private nodeService: NodeService) { }

  cy = '50%';
  cx = '50%';
  position: Position;

  ngOnInit(): void {
    this.moveSubscription = this.nodeService.positionEmitter.subscribe((position: Position) => {
      this.position = position;
      this.draw();
    });
  }

  private draw() {
    switch (this.position) {
      case Position.Top:
        this.cy = '0%';
        break;
      case Position.Bottom:
        this.cy = '100%';
        break;
    }
  }
}
