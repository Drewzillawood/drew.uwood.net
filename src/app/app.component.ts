import {Component, OnInit, Type, ViewContainerRef} from '@angular/core';
import {NodeService} from './shared/node/node.service';
import {SuperHeaderComponent} from './super-header/super-header.component';
import {HeaderComponent} from './header/header.component';
import {IntroductionComponent} from './content/introduction/introduction.component';
import {NodeComponent} from './shared/node/node.component';

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
    // this.nodeService.createDynamicComponent<SuperHeaderComponent>(SuperHeaderComponent, this.viewRef);
    // this.nodeService.createDynamicComponent<HeaderComponent>(HeaderComponent, this.viewRef);
    // this.nodeService.createDynamicComponent<IntroductionComponent>(IntroductionComponent, this.viewRef);
  }
}
