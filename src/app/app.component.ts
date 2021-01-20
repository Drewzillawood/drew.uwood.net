import {Component, OnInit} from '@angular/core';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {IntroductionComponent} from './content/introduction/introduction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drew.uwood.net';

  components = [
    SuperHeaderComponent,
    IntroductionComponent
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
