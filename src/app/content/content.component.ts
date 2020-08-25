import {Component, OnInit} from '@angular/core';
import {ContentService} from './content.service';
import {SectionContentsModel} from './model/section-contents.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contents: SectionContentsModel[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contents = this.contentService.getContents();
  }
}
