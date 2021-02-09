import {Type} from '@angular/core';

export enum Position { Default, Top, Bottom }

export class NodeModel {
  constructor(
    public type: Type<any>,
    public position: Position
  ) {}
}
