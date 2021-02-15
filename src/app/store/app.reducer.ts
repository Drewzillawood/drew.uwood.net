import * as fromNodeList from '../node-list/store/node-list.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  nodeList: fromNodeList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  nodeList: fromNodeList.nodeListReducer
};
