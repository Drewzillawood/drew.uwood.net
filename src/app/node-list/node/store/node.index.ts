import * as fromNodeHead from '../node-head/store/node-head.index';
import * as fromNodeBody from '../node-body/store/node-body.index';

export enum Position { Default, Top, Bottom }

export interface Node extends NodeState {
  type: string;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface NodeState {
  position: Position;
  nodeHeadState?: fromNodeHead.NodeHeadState;
  nodeBodyState?: fromNodeBody.NodeBodyState;
}
