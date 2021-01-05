import {Component, ElementRef, Input, OnInit} from '@angular/core';

enum Position {Top, Bottom}

@Component({
  selector: 'app-git-graph-dot',
  templateUrl: './git-graph-dot.component.html',
  styleUrls: ['./git-graph-dot.scss']
})
export class GitGraphDotComponent implements OnInit {

  @Input() set y(y: number) { this.cy = y; }

  constructor(private elRef: ElementRef) { }

  cy: number = 0;
  cx: number = 0;
  pos: Position;

  @Input() top() { this.pos = Position.Top; }
  @Input() bottom() { this.pos = Position.Bottom; }

  ngOnInit(): void {
    this.draw();
  }

  private draw() {
    const boundingClientRect = this.elRef.nativeElement.getBoundingClientRect();
    this.cy = boundingClientRect.height;
    this.cx = boundingClientRect.width;
    switch (this.pos) {
      case Position.Top:
        this.cy = boundingClientRect.top;
        break;
      case Position.Bottom:
        this.cy = boundingClientRect.bottom;
        break;
    }
  }
}
