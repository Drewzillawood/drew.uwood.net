import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  constructor(public elRef: ElementRef) { }

  ngOnInit(): void {
  }

}
