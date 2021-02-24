import { createReducer, on } from '@ngrx/store';
import { Coordinates, Node } from '../node/store/node.index';

import * as fromNode from '../node/store/node.reducer';
import * as fromNodeList from './node-list.index';

import * as NodeActions from '../node/store/node.actions';
import * as NodeListActions from './node-list.actions';

const initialState = {};

export const nodeListReducer = createReducer(
  initialState,
  on(NodeListActions.addNodes, (state: fromNodeList.State, action: { [key: string]: Node }) => {
    const val = { ...state };
    const values = Object.entries(action).values();
    for (let i = values.next(); !i.done && typeof i.value[1] !== 'string'; i = values.next()) {
      val[i.value[0]] = i.value[1];
    }
    return val;
  }),
  on(NodeListActions.assignCoordinatesToList, (state: fromNodeList.State, action: { key: string, coordinates: Coordinates }) => {
    const val = { ...state };
    val[action.key] = {
      ...state[action.key],
      nodeHeadState: fromNode.nodeReducer(state[action.key], NodeActions.setNodeCoordinates)
    };
    return val;
  })
);
