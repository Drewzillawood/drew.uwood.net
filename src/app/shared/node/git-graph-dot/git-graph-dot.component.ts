import {Component, ElementRef, Input, OnInit} from '@angular/core';

export enum Position {Top, Bottom}

@Component({
  selector: 'app-git-graph-dot',
  templateUrl: './git-graph-dot.component.html',
  styleUrls: ['./git-graph-dot.scss']
})
export class GitGraphDotComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  cy = '50%';
  cx = '50%';
  pos: Position;

  @Input() set position(pos: Position) { this.pos = pos; }

  ngOnInit(): void {
    this.draw();
  }

  private draw() {
    switch (this.pos) {
      case Position.Top:
        this.cy = '0%';
        break;
      case Position.Bottom:
        this.cy = '100%';
        break;
    }
  }
}
