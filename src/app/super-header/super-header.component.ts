import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements OnInit {
  defaultHeight: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.defaultHeight = this.elRef.nativeElement.parentElement.offsetHeight;
  }
}
