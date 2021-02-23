import { Node } from '../node/store/node.index';

export interface State {
  nodes: { [key: string]: Node };
}
