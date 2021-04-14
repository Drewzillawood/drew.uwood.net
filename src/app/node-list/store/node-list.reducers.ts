import { createReducer, on } from '@ngrx/store';

import * as fromNodeList from './node-list.index';
import * as NodeListActions from './node-list.actions';

const initialState: fromNodeList.State = {
  nodes: []
};

export const nodeListReducer = createReducer(
  initialState,
  on(NodeListActions.addNode, (state: fromNodeList.State, action) => {
    return {
      ...state,
      nodes: [...state.nodes, action]
    };
  })
);
