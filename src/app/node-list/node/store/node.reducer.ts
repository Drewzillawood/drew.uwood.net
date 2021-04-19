import { createReducer, on } from '@ngrx/store';

import * as fromNode from './node.index';
import * as NodeActions from './node.actions';

const initialState: fromNode.State = {
  id: null,
  head: null,
  body: null
};

export const nodeReducer = createReducer(
  initialState,
  on(NodeActions.addHead, (state: fromNode.State, action) => {
    return {
      ...state,
      head: action.coordinates
    };
  }),
  on(NodeActions.addBody, (state: fromNode.State, action) => {
    return {
      ...state,
      head: action.coordinates
    };
  })
);
