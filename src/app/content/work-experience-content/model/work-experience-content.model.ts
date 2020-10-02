export interface Company {
  name: string;
  imagePath: string;
}

export class WorkExperienceContentModel {
  constructor(public company: Company,
              public title: string,
              public tenure: string,
              public responsibilities: string[]) {  }
}
