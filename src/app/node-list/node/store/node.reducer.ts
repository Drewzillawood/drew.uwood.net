import { createReducer, on } from '@ngrx/store';

import * as fromNode from './node.index';
import { Position } from './node.index';
import * as fromNodeHead from '../node-head/store/node-head.reducer';
import * as NodeActions from './node.actions';
import * as NodeHeadActions from '../node-head/store/node-head.actions';

const initialState: fromNode.NodeState = {
  type: '',
  position: Position.Default
};

export const nodeReducer = createReducer(
  initialState,
  on(NodeActions.setNodeCoordinates, (state: fromNode.NodeState, action) => {
    return {
      ...state,
      nodeHeadState: fromNodeHead.nodeHeadReducer(state.nodeHeadState, action)
    };
  })
);
