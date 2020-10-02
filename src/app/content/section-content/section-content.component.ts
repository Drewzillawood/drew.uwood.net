import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {SectionContentsModel} from '../model/section-contents.model';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements AfterViewInit {

  @ViewChild('connector', { static: false }) connector;
  @Input() sectionContent: SectionContentsModel;

  constructor() { }

  ngAfterViewInit() {
    this.connector.draw();
  }
}
