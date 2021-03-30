import { Position } from '../../node-list/node/store/node.index';
import { createReducer, on } from '@ngrx/store';

import * as fromIntroduction from './introduction.index';
import * as IntroductionActions from './introduction.actions';

const initialState: fromIntroduction.IntroductionState = {
  node: {
    position: Position.Default
  }
};

export const introductionReducer = createReducer(
  initialState,
  on(IntroductionActions.setIntroductionState, (state: fromIntroduction.IntroductionState, action) => {
    return {
      ...state,
      node: action.node
    };
  })
);
