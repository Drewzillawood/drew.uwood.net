import { ActionReducerMap } from '@ngrx/store';

import * as NodeActions from './node.actions';

export enum Position { Default, Top, Bottom }

export interface Node {
  type: string;
  position: Position;
  coordinates?: Coordinates;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface State {
  node: Node;
}

export function nodeReducer(
  state: State,
  action: NodeActions.NodeActions): State {
  switch (action.type) {
    case NodeActions.SET_NODE:
      return {
        ...state,
        // coordinates: action.payload
      };
    default:
      return state;
  }
}

export interface NodeState {
  node: State;
}

export const nodeReducers: ActionReducerMap<NodeState> = {
  node: nodeReducer
};
