import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `<p>Hello World desde css.component</p>`,
  styles: [
    `
  p{ color: red}
  
  `,
  ],
})
export class CssComponent {
  constructor() {}
}
