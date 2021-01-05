import {ComponentRef} from '@angular/core';
import {CoordinateModel} from '../grid-utility/coordinate.model';

export interface NodeModel {
  next?: NodeModel;
  prev?: NodeModel;
  head?: ComponentRef<any>;
  body?: ComponentRef<any>;
}

export class Node implements NodeModel {

  constructor(
    public next?: Node,
    public prev?: Node,
    public head?: ComponentRef<any>,
    public body?: ComponentRef<any>
  ) {}

  getHeadRef(): CoordinateModel {
    return new CoordinateModel(this.head.location.nativeElement.getBoundingClientRect());
  }

  getBodyRef(): CoordinateModel {
    return new CoordinateModel(this.body.location.nativeElement.getBoundingClientRect());
  }
}
