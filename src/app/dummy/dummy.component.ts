import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
    <svg
      display="block"
      width="100%"
      height="100%"
    >
      <circle
        #circle
        cx=50%
        cy=50%
        fill="#008eb5"
        r="12.5"
      />
    </svg>
  `,
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
