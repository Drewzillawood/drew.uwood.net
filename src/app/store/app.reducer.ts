import {ActionReducerMap} from '@ngrx/store';

import * as fromNodeBody from '../node-list/node/node-body/store/node-body.reducer';

export interface AppState {
  nodeBody: fromNodeBody.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  nodeBody: fromNodeBody.nodeBodyReducer
};
