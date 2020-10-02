import {Component, Input, OnInit} from '@angular/core';
import {WorkExperienceContentModel} from '../model/work-experience-content.model';

@Component({
  selector: 'app-work-experience-header',
  templateUrl: './work-experience-header.component.html',
  styleUrls: ['./work-experience-header.component.scss']
})
export class WorkExperienceHeaderComponent implements OnInit {

  @Input() headerContent: WorkExperienceContentModel;

  constructor() { }

  ngOnInit() {
  }

}
