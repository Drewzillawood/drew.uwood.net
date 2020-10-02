import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkExperienceContentModel} from '../model/work-experience-content.model';

@Component({
  selector: 'app-work-experience-header',
  templateUrl: './work-experience-header.component.html',
  styleUrls: ['./work-experience-header.component.scss']
})
export class WorkExperienceHeaderComponent implements OnInit {

  @Input() headerContent: WorkExperienceContentModel;
  @Output() imageLoaded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onImageLoad() {
    this.imageLoaded.emit();
  }
}
