import { createReducer, on } from '@ngrx/store';

import * as fromNode from './node.index';
import * as NodeActions from './node.actions';

const initialState: fromNode.State = {
  id: null,
  coordinates: null
};

export const nodeReducer = createReducer(
  initialState,
  on(NodeActions.initialize, (state: fromNode.State, action) => {
    return {
      ...state,
      coordinates: action.coordinates
    };
  })
);
