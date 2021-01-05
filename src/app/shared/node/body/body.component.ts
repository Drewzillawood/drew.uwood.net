import {AfterViewInit, Component, Input, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {NodeService} from '../node.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {

  @ViewChild('thing', { read: ViewContainerRef, static: false }) viewRef: ViewContainerRef;
  @Input() type: Type<any>;

  constructor(private nodeService: NodeService) { }

  ngAfterViewInit(): void {
    this.nodeService.createDynamicComponent(this.type, this.viewRef);
  }
}
