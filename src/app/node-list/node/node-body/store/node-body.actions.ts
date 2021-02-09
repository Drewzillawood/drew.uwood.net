import {Action} from '@ngrx/store';
import {NodeBodyModel} from '../model/node-body.model';

export const INITIALIZE_COMPONENT = '[Node Body] Initialize Component';

export class InitializeComponent implements Action {
  readonly type = INITIALIZE_COMPONENT;
  constructor(public payload: NodeBodyModel) {}
}

export type NodeBodyActions = InitializeComponent;
