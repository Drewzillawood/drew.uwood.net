import { Action } from '@ngrx/store';
import { Node } from '../node/store/node.reducer';

export const SET_NODES = '[Node List] Set Nodes';

export class SetNodes implements Action {
  readonly type = SET_NODES;
  
  constructor(public payload: Node[]) {}
}

export type NodeListActions = SetNodes;
