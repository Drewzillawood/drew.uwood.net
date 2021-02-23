import { createReducer, on } from '@ngrx/store';

import * as fromNode from './node.index';
import * as NodeActions from './node.actions';
import * as fromNodeList from '../../store/node-list.index';

export const nodeReducer = createReducer(
  on(NodeActions.setNodeCoordinates, (state: fromNode.NodeState, action) => {
    return state;
  })
);
