import { createReducer, on } from '@ngrx/store';

import * as fromNodeHead from './node-head.index';
import * as NodeHeadActions from './node-head.actions';

const initialState: fromNodeHead.NodeHeadState = {
  coordinates: { x: 0, y: 0 }
};

export const nodeHeadReducer = createReducer(
  initialState,
  on(NodeHeadActions.setNodeHeadCoordinates, (state: fromNodeHead.NodeHeadState, action) => {
    return {
      ...state,
      coordinates: action.coordinates
    };
  })
);
