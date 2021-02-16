import { ActionReducerMap } from '@ngrx/store';

import * as fromNodeList from '../node-list/store/node-list.reducer';

export interface AppState {
  nodeList: fromNodeList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  nodeList: fromNodeList.nodeListReducer
};
