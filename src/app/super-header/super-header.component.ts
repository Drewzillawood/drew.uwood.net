import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements AfterViewInit {

  @ViewChild('connector', { static: false }) connector;

  constructor() { }

  ngAfterViewInit(): void {
    this.connector.draw();
  }
}
