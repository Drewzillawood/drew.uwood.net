import { Action } from '@ngrx/store';
import { NodeModel } from '../node/model/node.model';

export const ADD_NODE = '[Node List] Add Node';
export const ADD_NODES = '[Node List] Add Nodes';

export class AddNode implements Action {
    readonly type = ADD_NODE;

    constructor(public payload: NodeModel) {}
}

export class AddNodes implements Action {
    readonly type = ADD_NODES;

    constructor(public payload: NodeModel[]) {}
}

export type NodeListActions =
    AddNode |
    AddNodes;
