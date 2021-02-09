import {Action} from '@ngrx/store';

export const MOVE_LINE = 'MOVE_LINE';

export class MoveLine implements Action {
  readonly type = MOVE_LINE;
  constructor(public payload: string) {}
}

export type NodeActions =
  MoveLine;
