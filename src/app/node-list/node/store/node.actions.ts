import { Action } from '@ngrx/store';
import { Node } from '@angular/compiler';

export const SET_NODE = '[Node] Set Node';

export class SetNodeCoordinates implements Action {
  readonly type = SET_NODE;
  constructor(public payload: Node) {}
}

export type NodeActions = SetNodeCoordinates;
