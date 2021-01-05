import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NodeService} from '../shared/node/node.service';
import {DotComponent} from '../shared/dot/dot.component';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
