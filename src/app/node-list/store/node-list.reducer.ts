import { createReducer, on } from '@ngrx/store';
import { NodeState } from '../node/store/node.index';

import * as fromNodeList from './node-list.index';
import * as fromNodeHead from '../node/node-head/store/node-head.reducer';

import * as NodeListActions from './node-list.actions';
import * as NodeHeadActions from '../node/node-head/store/node-head.actions';

const initialState = {};

export const nodeListReducer = createReducer(
  initialState,
  on(NodeListActions.addNodes, (state: fromNodeList.State, action: { [key: string]: NodeState }) => {
    const val = { ...state };
    const values = Object.entries(action).values();
    for (let i = values.next(); !i.done && typeof i.value[1] !== 'string'; i = values.next()) {
      val[i.value[0]] = i.value[1];
    }
    return val;
  }),
  on(NodeListActions.assignCoordinatesToList, (state: fromNodeList.State, action) => {
    const val = { ...state };
    val[action.key] = {
      ...state[action.key],
      nodeHeadState: fromNodeHead.nodeHeadReducer(state[action.key].nodeHeadState, {
        ...action,
        type: NodeHeadActions.SET_NODE_HEAD_COORDINATES
      })
    };
    return val;
  })
);
