import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNodeDetail]'
})
export class NodeDetailDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
