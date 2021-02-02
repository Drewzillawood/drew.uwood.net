import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {GitGraphDotService, ReferenceList} from './git-graph-dot.service';
import {NodeSingletonService} from '../node-singleton.service';
import {CoordinateModel} from '../../grid-utility/coordinate.model';

export enum Position {Default, Top, Bottom}

@Component({
  selector: 'app-git-graph-dot',
  templateUrl: './git-graph-dot.component.html',
  styleUrls: ['./git-graph-dot.scss']
})
export class GitGraphDotComponent implements OnInit, AfterViewInit {

  @ViewChild('svg', { static: false }) svg;
  @ViewChild('point', { static: false }) point;

  constructor(private nodeSingletonService: NodeSingletonService,
              private gitGraphDotService: GitGraphDotService,
              private renderer: Renderer2) {}

  cy = '50%';
  cx = '50%';
  position: Position;

  ngOnInit(): void {
    this.gitGraphDotService.redrawSubject.subscribe((position: Position) => {
      this.draw(position);
    });

    this.gitGraphDotService.positionSubject.subscribe((position: CoordinateModel) => {
      this.gitGraphDotService.addPosition(position);
    });
  }

  draw(position: Position) {
    this.position = position;
    switch (this.position) {
      case Position.Top:
        this.cy = '0%';
        break;
      case Position.Bottom:
        this.cy = '100%';
        break;
    }
  }

  ngAfterViewInit(): void {
    this.gitGraphDotService.positionsSubject.subscribe((positions: ReferenceList) => {
      const dx = positions.a.x + positions.b[0].x + 12.5 + 2.5;
      const dy = positions.b[0].y / 2;
      const d = `M${positions.a.x}  ${positions.b[0].y}\
                 c${0}  ${-dy / 2}\
                  ${dx} ${-dy / 2}\
                  ${dx} ${-dy}`;
      this.renderer.setAttribute(this.svg.nativeElement, 'd', d);
    });
    this.gitGraphDotService.positionSubject.next(this.getPosition());
  }

  getPosition(): CoordinateModel {
    const x = this.point.nativeElement.parentElement.getBoundingClientRect().width / 2;
    const y = this.point.nativeElement.parentElement.getBoundingClientRect().y / 1.5 + 12.5;
    return new CoordinateModel(x, y);
  }
}
