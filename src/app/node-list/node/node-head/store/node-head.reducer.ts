import { createReducer, on } from '@ngrx/store';

import * as fromNodeHead from './node-head.index';
import * as NodeHeadActions from './node-head.actions';

const initialState: fromNodeHead.State = {
  coordinates: { x: 0, y: 0 }
};

export const nodeHeadReducer = createReducer(
  initialState,
  on(NodeHeadActions.setNodeHeadCoordinates, (state: fromNodeHead.State, action) => {
    return {
      ...state,
      coordinates: action.coordinates
    };
  })
);
