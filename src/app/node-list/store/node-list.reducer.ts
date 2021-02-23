import { createReducer, on } from '@ngrx/store';
import { Node } from '../node/store/node.index';

import * as fromNodeList from './node-list.index';
import * as NodeListActions from './node-list.actions';

const initialState = {};

export const nodeListReducer = createReducer(
  initialState,
  on(NodeListActions.addNode, (state: fromNodeList.State, action) => {
    const val = { ...state };
    val[action.type] = action[action.type];
    return val;
  }),
  on(NodeListActions.addNodes, (state: fromNodeList.State, action: { [key: string]: Node }) => {
    const val = { ...state };
    const values = Object.entries(action).values();
    for (let i = values.next(); !i.done && typeof i.value[1] !== 'string'; i = values.next()) {
      val[i.value[0]] = i.value[1];
    }
    return val;
  })
);
