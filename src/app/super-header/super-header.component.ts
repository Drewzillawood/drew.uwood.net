import {Component, Type} from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent {

  constructor(public type: Type<any>) {}
}
