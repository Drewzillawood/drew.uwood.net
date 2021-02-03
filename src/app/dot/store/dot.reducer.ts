import * as DotActions from './dot.action';

export interface State {
  d: string;
}

const initialState: State = {
  d: 'M50 50 l100 100'
};

export function dotReducer(
  state: State = initialState,
  action: DotActions.DotActions) {
  switch (action.type) {
    case DotActions.MOVE_LINE:
      return {
        ...state,
        d: action.payload
      };
  }
}
