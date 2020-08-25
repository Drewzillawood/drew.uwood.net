import {Injectable} from '@angular/core';
import {SectionContentsModel} from './model/section-contents.model';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private contents: SectionContentsModel[] = [
    {
      header: null,
      content: [
        `Experienced Software Associate with a demonstrated history of working in the computer software industry.
         Skilled in Java, SQL, MVC/MVP Frameworks and Full-Stack Development. Eager to pursue new opportunities to further
         my understanding of application and web development.`
      ]
    }
  ];

  constructor() {}

  getContents(): SectionContentsModel[] {
    return this.contents;
  }
}
