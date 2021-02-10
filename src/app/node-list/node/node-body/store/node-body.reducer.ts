import {NodeBodyModel} from '../model/node-body.model';

export interface State {
  head: NodeBodyModel;
}

const initialState: State = {
  head: null
};

export function nodeBodyReducer(
  state: State = initialState,
  action) {
  return state;
}
