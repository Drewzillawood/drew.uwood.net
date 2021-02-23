import * as fromNode from './node.reducer';
import * as fromNodeList from '../../store/node-list.index';
import * as fromNodeHead from '../node-head/store/node-head.index';
import * as fromNodeHeadReducer from '../node-head/store/node-head.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { SuperHeaderComponent } from '../../../super-header/super-header.component';

export enum Position { Default, Top, Bottom }

export interface Node {
  type: string;
  position: Position;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface State {
  node: Node;
}

export const selectNodeState = createFeatureSelector<State>('node');

export interface NodeState {
  nodeHead: fromNodeHead.State;
}

export const nodeReducer: ActionReducerMap<NodeState> = {
  nodeHead: fromNodeHeadReducer.nodeHeadReducer
};
