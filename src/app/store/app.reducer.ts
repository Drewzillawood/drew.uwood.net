import * as fromNode from '../node-list/node/store/nodeReducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  node: fromNode.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  node: fromNode.nodeReducer
};
