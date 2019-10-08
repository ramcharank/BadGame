import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
pageTitle: string = "Bad Game";
  constructor() { }

  ngOnInit() {
  }

}
