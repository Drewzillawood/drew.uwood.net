import * as NodeActions from './node.action';
import {NodeModel} from '../model/node.model';

export interface State {
  nodes: NodeModel[];
}

const initialState: State = {
  nodes: []
};

export function nodeReducer(
  state: State = initialState,
  action: NodeActions.NodeActions) {
  switch (action.type) {
    case NodeActions.MOVE_LINE:
      return {
        ...state,
        action
      };
  }
}
