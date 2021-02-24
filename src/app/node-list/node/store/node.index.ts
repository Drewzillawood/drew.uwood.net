import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromNodeHead from '../node-head/store/node-head.index';

export enum Position { Default, Top, Bottom }

export interface Node {
  type: string;
  position: Position;
  nodeHeadState?: fromNodeHead.NodeHeadState;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface State {
  nodeHead?: fromNodeHead.NodeHeadState;
}

export interface NodeState {
  type: string;
  position: Position;
  nodeHeadState?: fromNodeHead.NodeHeadState;
}
