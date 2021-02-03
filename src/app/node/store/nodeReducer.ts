import * as NodeActions from './node.action';

export interface State {
  d: string;
}

const initialState: State = {
  d: 'M50 50 l100 100'
};

export function nodeReducer(
  state: State = initialState,
  action: NodeActions.NodeActions) {
  switch (action.type) {
    case NodeActions.MOVE_LINE:
      return {
        ...state,
        d: action.payload
      };
  }
}
