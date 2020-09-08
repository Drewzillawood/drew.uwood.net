import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({ selector: '[appNode]' })
export class NodeDirective implements OnInit {
  @Input('headSpan') headSpan: string;
  @Input('detailSpan') detailSpan: string;
  @HostBinding('class.col-sm-2') headSize: string;
  @HostBinding('class.col-sm-10') detailSize: string;

  ngOnInit(): void {
    this.headSize = this.headSpan;
    this.detailSize = this.detailSpan;
  }
}
