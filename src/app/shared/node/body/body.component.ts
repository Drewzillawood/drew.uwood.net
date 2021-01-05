import {AfterViewInit, Component, ComponentRef, EventEmitter, Input, Output, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NodeService} from '../node.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild('thing', { read: ViewContainerRef, static: false }) viewRef: ViewContainerRef;
  @Input() type: Type<any>;
  @Output() componentAssignedEmitter = new EventEmitter<ComponentRef<any>>();

  constructor(private nodeService: NodeService) { }

  ngAfterViewInit(): void {
    const componentRef = this.nodeService.createDynamicComponent(this.type, this.viewRef);
    this.componentAssignedEmitter.emit(componentRef);
  }
}
