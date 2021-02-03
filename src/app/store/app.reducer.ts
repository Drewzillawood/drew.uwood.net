import * as fromDot from '../dot/store/dot.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  dot: fromDot.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  dot: fromDot.dotReducer
};
