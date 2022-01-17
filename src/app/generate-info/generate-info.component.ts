import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-generate-info',
  templateUrl: './generate-info.component.html',
  styleUrls: ['./generate-info.component.css'],
})
export class GenerateInfoComponent implements OnInit {
  hero: Info = {
    id: 1,
    name: 'Windstorm',
  };
  constructor() {}

  ngOnInit() {}
}
