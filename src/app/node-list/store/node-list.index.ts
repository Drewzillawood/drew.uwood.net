import { NodeState } from '../node/store/node.index';

export interface State {
  nodes: { [key: string]: NodeState };
}
