import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit() {

  }
}
