import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <hr />
  <!-- <app-ng-style></app-ng-style> -->
  <app-css></app-css>

  <p>Hola Mundo desde app.component</p>

  <app-clases></app-clases>
  <app-ng-switch></app-ng-switch>`
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
