import {Component, Input, OnInit} from '@angular/core';
import {WorkExperienceContentModel} from '../model/work-experience-content.model';

@Component({
  selector: 'app-work-experience-detail',
  templateUrl: './work-experience-detail.component.html',
  styleUrls: ['./work-experience-detail.component.scss']
})
export class WorkExperienceDetailComponent implements OnInit {

  @Input() detailContent: WorkExperienceContentModel;

  constructor() { }

  ngOnInit() {
  }

}
