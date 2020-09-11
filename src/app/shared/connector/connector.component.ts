import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements OnInit {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    console.log(this.elRef);
  }
}
