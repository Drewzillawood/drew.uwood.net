import {AfterViewInit, Component, ComponentRef, EventEmitter, Input, Output, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NodeService} from '../node.service';
import {CoordinateModel} from '../../grid-utility/coordinate.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef, static: false }) viewRef: ViewContainerRef;
  @Input() type: Type<any>;

  constructor(private nodeService: NodeService) { }

  ngAfterViewInit(): void {
    const componentRef = this.nodeService.createDynamicComponent(this.type, this.viewRef);
    this.nodeService.componentAssignedSubject.next(componentRef);

  }
}
