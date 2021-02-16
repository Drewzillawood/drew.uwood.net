import * as NodeListActions from './node-list.actions';
import { Node } from '../node/store/node.reducer';

export interface State {
  nodes: Node[];
}

const initialState: State = {
  nodes: []
};

export function nodeListReducer(
  state: State = initialState,
  action: NodeListActions.NodeListActions
) {
  switch (action.type) {
    case NodeListActions.SET_NODES:
      return {
        ...state,
        nodes: [
          ...state.nodes,
          ...action.payload
        ]
      };
    default:
      return state;
  }
}
