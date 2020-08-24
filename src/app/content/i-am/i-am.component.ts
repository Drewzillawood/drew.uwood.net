import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss']
})
export class IAmComponent implements OnInit {
  iAm: string =
    'Experienced Software Associate with a demonstrated history of working in the computer software industry. \
     Skilled in Java, SQL, MVC/MVP Frameworks and Full-Stack Development. \
     Eager to pursue new opportunities to further my understanding of application and web development. ';

  constructor() { }

  ngOnInit() { }
}
