import { Component, OnInit } from '@angular/core';
import { Pearson } from '../../stores/pearson.store';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    protected _person: Pearson
  ) { }

  ngOnInit() {
  }

}
