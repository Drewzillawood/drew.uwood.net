import * as fromNode from '../node/store/node.reducer';
import {ActionReducerMap, createFeatureSelector, createReducerFactory, createSelector} from '@ngrx/store';
import {NodeModel} from '../node/model/node.model';

export interface State {
  nodes: NodeModel[];
}

export const initialState: State = {
  nodes: []
};

export function nodeListReducer(
  state: State = initialState,
  action) {
  return state;
}

