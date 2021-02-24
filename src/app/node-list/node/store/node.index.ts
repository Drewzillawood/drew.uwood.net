import * as fromNodeHead from '../node-head/store/node-head.index';

export enum Position { Default, Top, Bottom }

export interface Node extends NodeState {
  type: string;
  position: Position;
  nodeHeadState?: fromNodeHead.NodeHeadState;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface NodeState {
  position: Position;
  nodeHeadState?: fromNodeHead.NodeHeadState;
}
