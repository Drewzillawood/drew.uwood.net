import {NodeHeadModel} from '../model/node-head.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  head: NodeHeadModel;
}

const initialState: State = {
  head: null
};

export function nodeHeadReducer(
  state: State = initialState,
  action) {
  return state;
}
