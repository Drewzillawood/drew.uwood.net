import { Component, OnInit } from '@angular/core';
import {TileModel} from './model/tile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navButtons: TileModel[] = [
    {text: '', cols: 3, rows: 1},
    {text: 'Place Holder', cols: 2, rows: 1},
    {text: 'Place Holder', cols: 2, rows: 1},
    {text: 'Place Holder', cols: 2, rows: 1},
    {text: '', cols: 3, rows: 1}
  ];

  constructor() { }

  ngOnInit() {
  }

}
