import {Component, Input, OnInit} from '@angular/core';
import {SectionContentsModel} from '../model/section-contents.model';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {
  @Input() sectionContent: SectionContentsModel;

  constructor() { }

  ngOnInit() { }
}
