import {Component, OnInit} from '@angular/core';
import {Specifications} from '../shared/node/node.model';
import {Position} from '../shared/node/git-graph-dot/git-graph-dot.component';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements OnInit, Specifications {

  position: Position = Position.Default;

  constructor() {
  }

  ngOnInit(): void {
  }
}
