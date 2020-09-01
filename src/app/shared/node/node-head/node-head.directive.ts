import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNodeHead]'
})
export class NodeHeadDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
