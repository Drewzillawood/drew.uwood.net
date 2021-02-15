import { AfterViewInit, Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NodeBodyService } from './node-body.service';

@Component({
  selector: 'app-node-body',
  templateUrl: './node-body.component.html',
  styleUrls: ['./node-body.component.scss']
})
export class NodeBodyComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewRef;
  @Input() type: Type<any>;
  
  constructor(private nodeBodyService: NodeBodyService) { }
  
  ngOnInit(): void {
  
  }
  
  ngAfterViewInit(): void {
    this.nodeBodyService.createDynamicComponent(this.type, this.viewRef);
  }
}
