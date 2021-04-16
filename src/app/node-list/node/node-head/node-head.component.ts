import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-head',
  template: `
    <svg>
      <circle
        #circle
        cx=50%
        cy=50%
        fill="#008eb5"
        r="12.5"
      />
    </svg>
  `,
  styleUrls: ['./node-head.component.scss']
})
export class NodeHeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
