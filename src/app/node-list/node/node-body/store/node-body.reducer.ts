import { createReducer, on } from '@ngrx/store';

import * as fromNodeBody from './node-body.index';
import * as NodeBodyActions from './node-body.actions';

const initialState: fromNodeBody.NodeBodyState = {
  contents: {}
};

export const nodeBodyReducer = createReducer(
  initialState,
  on(NodeBodyActions.setNodeBodyContents, (state: fromNodeBody.NodeBodyState, action) => {
    return {
      ...state,
      contents: action.contents
    };
  })
);
