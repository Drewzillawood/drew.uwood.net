import {NodeBodyModel} from '../model/node-body.model';

import * as NodeBodyActions from './node-body.actions';

export interface State {
  nodeBodyRef: NodeBodyModel;
}

const initialState: State = {
  nodeBodyRef: null
};

export function nodeBodyReducer(
  state: State = initialState,
  action: NodeBodyActions.NodeBodyActions
) {
  switch (action.type) {
    case NodeBodyActions.INITIALIZE_COMPONENT:
      return {
        ...state,
        nodeBodyRef: action.payload
      };
  }
}
