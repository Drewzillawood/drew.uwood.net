import { Action } from '@ngrx/store';
import { NodeModel } from '../model/node.model';

export const ADD_NODE = '[Node] Add Node';

export class AddNode implements Action {
    readonly type = ADD_NODE;

    constructor(public payload: NodeModel) {}
}

export type NodeActions = AddNode;
