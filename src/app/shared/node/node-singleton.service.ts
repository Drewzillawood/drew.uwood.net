import {ComponentRef, Injectable} from '@angular/core';
import {Node} from './node.model';
import {GitGraphDotComponent} from './git-graph-dot/git-graph-dot.component';

@Injectable({ providedIn: 'root' })
export class NodeSingletonService {

  node: Node = new Node();

  add(head: ComponentRef<any>, componentRef: ComponentRef<any>): void {
    if (this.node.next === undefined) {
      this.node.next = this.node;
      this.node.prev = this.node;
      this.node.head = head;
      this.node.body = componentRef;
    } else {
      const node = new Node(
        this.node,
        this.node.prev,
        head,
        componentRef
      );
      this.node.prev.next = node;
      this.node.prev = node;
    }
  }

  getCoordinatePair(): void {
    if (this.node !== undefined && this.node.prev !== undefined) {
      const head: ComponentRef<GitGraphDotComponent> = this.node.head;
      const instance = head.instance;
      // const coordinateModel = new CoordinateModel(head.instance.getBoundingClientRect());
      // return {
      //   a: coordinateModel,
      //   b: new CoordinateModel(this.node.next.head.nativeElement.getBoundingClientRect())
      // };
    }
  }
}
