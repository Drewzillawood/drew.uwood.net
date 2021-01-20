import {ComponentRef} from '@angular/core';
import {CoordinateModel} from '../grid-utility/coordinate.model';
import {Position} from './git-graph-dot/git-graph-dot.component';

export interface NodeModel {
  next?: NodeModel;
  prev?: NodeModel;
  head?: ComponentRef<any>;
  body?: ComponentRef<any>;
}

export interface Specifications {
  position?: Position;
}

export class Node implements NodeModel {

  constructor(
    public next?: Node,
    public prev?: Node,
    public head?: ComponentRef<any>,
    public body?: ComponentRef<any>,
    public spec?: Specifications
  ) {}

  getHeadRef(): CoordinateModel {
    return new CoordinateModel(this.head.location.nativeElement.getBoundingClientRect());
  }

  getBodyRef(): CoordinateModel {
    return new CoordinateModel(this.body.location.nativeElement.getBoundingClientRect());
  }
}
