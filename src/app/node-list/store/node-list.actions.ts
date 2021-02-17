import { Action } from '@ngrx/store';
import { Node, State } from '../node/store/node.reducer';

export const INIT_NODES = '[Node List] Set Nodes';

export class SetNodes implements Action {
  readonly type = INIT_NODES;
  
  constructor(public payload?: Node[]) {}
}

export type NodeListActions = SetNodes;
