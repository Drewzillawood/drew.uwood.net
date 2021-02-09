import {Type} from '@angular/core';

export enum Position { Default, Top, Bottom }

export class NodeModel {
  constructor(
    type: Type<any>,
    position: Position
  ) {}
}
