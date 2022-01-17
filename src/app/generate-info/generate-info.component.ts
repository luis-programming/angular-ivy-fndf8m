import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

import { INFO } from '../info-mock';

@Component({
  selector: 'app-generate-info',
  templateUrl: './generate-info.component.html',
  styleUrls: ['./generate-info.component.css'],
})
export class GenerateInfoComponent implements OnInit {
  infos = INFO;

  constructor() {}

  ngOnInit() {}

  selectedInfo?: Info;
  onSelect(info: Info): void {
    this.selectedInfo = info;
  }
}
